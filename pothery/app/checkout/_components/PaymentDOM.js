import React, { useState } from "react";
import { Input } from "../../../components/ui/input";

export function PaymentDOM() {
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpiryMonth] = useState("");
  const [expYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [paymentType, setPaymentType] = useState("Credit/Debit Card");

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
          />
          <div className="flex gap-2 mb-2">
            <select
              name="expMonth"
              value={expMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              required
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
          />
        </>
      )}
    </div>
  );
}
