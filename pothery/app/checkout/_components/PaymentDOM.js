import React, { useState, useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { BACKEND_URL } from "../../constants";

export function PaymentDOM({ paymentInfo, setPaymentInfo }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpiryMonth] = useState("");
  const [expYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [paymentType, setPaymentType] = useState("Credit/Debit Card");
  const [useSavedPayment, setUseSavedPayment] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (paymentInfo) {
      setCardNumber(paymentInfo.card_number || "");
      setExpiryMonth(paymentInfo.exp_month || "");
      setExpiryYear(
        paymentInfo.exp_year.length === 2
          ? "20" + paymentInfo.exp_year
          : paymentInfo.exp_year || ""
      );
      setSecurityCode(paymentInfo.security_code || "");
    }
  }, [paymentInfo]);

  const handleCheckboxChange = async (event) => {
    const checked = event.target.checked;
    setUseSavedPayment(checked);
    if (checked) {
      const token = localStorage.getItem("token");
      fetch(`${BACKEND_URL}/api/getPaymentMethods`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched payment data:", data); // 添加日志

          if (data.error || !data.card_number) {
            setPaymentInfo(null);
            setError("No saved payment method found.");
          } else {
            setPaymentInfo(data);
            setError("");
          }
        })
        .catch((error) => {
          console.error("Error fetching payment info:", error);
          setError("Error fetching payment info.");
        });
    } else {
      // 清空支付信息字段
      setCardNumber("");
      setExpiryMonth("");
      setExpiryYear("");
      setSecurityCode("");
      setPaymentInfo(null);
      setError("");
    }
  };

  let yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i < currentYear + 11; i++) {
    yearOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div>
      <h1 className="mb-2 border-b-2 pb-1">Payment</h1>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={useSavedPayment}
          onChange={handleCheckboxChange}
        />
        <label className="ml-2">Use saved payment method</label>
      </div>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="grid grid-cols-4">
        <Input
          name="paymentType"
          type="radio"
          value="Credit/Debit Card"
          checked={paymentType === "Credit/Debit Card"}
          onChange={(e) => setPaymentType(e.target.value)}
        />{" "}
        <label>Credit/Debit Card</label>
        <Input
          name="paymentType"
          type="radio"
          value="Paypal"
          checked={paymentType === "Paypal"}
          onChange={(e) => setPaymentType(e.target.value)}
        />{" "}
        <label>Paypal</label>
      </div>
      {paymentType === "Credit/Debit Card" && (
        <>
          <Input
            name="cardNumber"
            placeholder="Card Number *"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="w-full mb-2"
            disabled={useSavedPayment && paymentInfo !== null}
          />
          <div className="flex gap-2 mb-2">
            <select
              name="expMonth"
              value={expMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
              disabled={useSavedPayment && paymentInfo !== null}
            >
              <option value="">Expire Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              id="expYear"
              name="expYear"
              value={expYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              required
              disabled={useSavedPayment && paymentInfo !== null}
            >
              <option value="">Select a year</option>
              {yearOptions}
            </select>
          </div>
          <Input
            name="securityCode"
            placeholder="Security Code *"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
            className="w-full mb-2"
            disabled={useSavedPayment && paymentInfo !== null}
          />
        </>
      )}
    </div>
  );
}
