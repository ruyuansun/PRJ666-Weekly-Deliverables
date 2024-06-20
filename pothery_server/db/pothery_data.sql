-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pothery
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `document` mediumblob,
  `name` varchar(32) DEFAULT NULL,
  `type` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (0,4,_binary 'PK\0\0\0\0\0!\0\��9�\0\0\r\0\0\0[Content_Types].xml �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�UKK\�@����Wi�*�HS>�*�\�u\�N���bg�\��w��\"҇����\�|��f��\�\�\�\�\r�\�+q\\�E�\��q%��n{\�@R^+<Tb(.����y,�\�c%\Z�x!%\�\r8�e�\��\�($��/\�XFUO\�\�I�&\�\�	<��\�\��5�\�\�Rq3\�۝�W\�Eqս\�RUB\�hM���\�7���\�hdjС�:�.1&P\Z\0r��\�0cz\"6�B.\�L`q;҅��+�0lL\�#����}�\�բ\�\�HFC�\�)\�\�\�\�\���&�!L\�� ۶&��t\��O\�\����)D\�\�l�\�Omu/2$2�թ����Ζ�,\rz[\�z�\�\��\�/\�Q\�\\P\�\��3oG)���u�3t\�\�%d�\r�Hs�\�	Ϡ���@?(\�{�{��nN^����\�۽\�_�-\�\�[�\�dO�\���\��?5\��3~\0\0\0��\0PK\0\0\0\0\0!\0^�e\0\0\�\0\0\0_rels/.rels �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��MK1�\��!̽;\�*\"\�l/E\�Md�1��`7������FAt��z��w�y��f��x�{v�E	��fӻV\�K����rF�\�H\"l�\��3�*\�\��>��⢄.%��uGVł=�\\i8X�rZ�J�%\\�\��\�\ZP\�4\�\�H;s�>����67M�i\�zoɥ#+��DΐY��\�B\��5�V��$��~\�\�\��\"c\'Z��\�\�k\�RRF%���\��\�8���EsܙF|\�0�2�Xn/ɢ�1�=c\�W\�7\�޲�\0\0\0��\0PK\0\0\0\0\0!\0�\�a��\0\0�\0\0\0\0\0xl/workbook.xml�U]o�8}_i��\�;�&@\05ڮ\�Q\�fڗH#�b0k�6\�h��^Cҏ\�j�\�,Jl�u|\�\�^ξ\�\Z=1��h\��`��%o\�ַUn�R��%�E\�\�\�S֗�_9{r� \�@�\�V�u;�**\�P5kae#dC5壣:\�h�*\�tS;.Ɓ\�P\�Z#B,O��\r/X&��a�A$����\�:�5\�)p\r�۾�\�t\0��k�_P5E|�\�\nIj0{G|���\�O04\�\�&X:��\�Jl�������;�|p�\�\��!y�dO\�\��>\�*x\�\n\���i4\�\Z���>�\�rs��\r�\�\�(]D�\�+mL�j\�T\�e\�5+\�\��\�}��}����U\�\�8���W9_KT�\r\�k�!\�!3� r}����5�-\�,�\�\��Y\�\r\�i%@\�\��\�s\� �@_`+���郺��B��\�V\Z��)0݈\nL/\'[�o\�S[-��-kYA\�.v1�훆ɵ;A\�7�A�;�bM\�\�\�\Z�	JE\��-/\�tBWTK�[�:=Ϊ� uZ�9\��\�\���\�\�[e|��\�/�K\�-}�\0CA*��$\�{��\�ԛ�8�p@�\�,�7\��p\�\�d�\�l�$Q�D`�\�B\�^W{\�ع\�H���\�\�Bp\���0�a���=�\���kGA\�\��l���/\\�\ZcM��\�\�Y�)\�\��x�[�/\�ޟ�\�{^\�\nL��HZh����\�\n�ΰoI��\�\�����\r}f\Zl\��\�am�\�\�2a\�4��\�\�f\�\��g-$cs��(\��ñ�\�$�醍�nhv���Tz\�A�\�/f8�l������Bo\�ک��K�̖	x\�P��R:�J|�:��z%i��o\�\r\�$T��F��\�{����E/\'�\�\�Ix��\�SF�t\�\�od���O�\�N3�{Hr�\�\�86m��}�܌�8}H��&3~ߟ����`}\�Nܜߝ�1�z��:q\�\�r��>��\�:C4L;h\�9\���/\0\0\0��\0PK\0\0\0\0\0!\0ߤg(\Z\0\0d\0\0\Z\0xl/_rels/workbook.xml.rels �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��Mk\�0�\��\���$ݺ2\��2�n\�j\�\�v�\�m��3KS(\�%�b��\�����\�}\�}��5�\'Q\�\Ze�\�T��\�/w\�<IS\�\�\Z�G\�w\�\�\��[Iᒯ�γ�b�\�5Q�\�U�Z�\�vhB��NK\n����\� +�4�\�\�\Z<;\�d�Bp�/V�\�}��׶e\�(|�\�\�\��Է\�,��B�7�#�\���Kګ�\'�?�\�HE0f�!ԫ9�tI\Z\nC\�\�\�p&sɒ_\�|�H\'�1\�a�\�¬�=�t�5צ�\�\����SK�\���1Lh��k\r��\r\�\0\0\0��\0PK\0\0\0\0\0!\0n�\�\�j\0\0\�\0\0\0\0\0xl/worksheets/sheet1.xml\0\0\0��\0\0\0����ێ�0�\�+��\��C QȪju/���=\\;\�+S\�9�\�w\�؁$R�݈x\����x`�p��gJs\��!�XKe\�\�M�~|_Mr\�iCڒ4�e:1��\�\�-Rmu͘�\�\�\�\�t� дf�h_v��\'�T��U�@w��\��&�\�p\Z\�[t&\�\���*N\�\'Iw��\�Q�!�\�5\��@tN�\�u*E�5o�99(��?nZ�Ⱥ�}qB�wTpE��7�$8UR\�\��@\�9\�o\�B/����\�\�$Pl\�\�^Q\�\�R\�\�]a�a\�̖K\�w�,\�߰�M�b;�\�ax�����\�	\�]y�U��\�Oq��\�\�5\�O\��\��Y?��Q\�@#♒�=\�l`.�޶]��rk\�aaBڅY!B\r߳���\�_h�\�N\Z\\�\r.����\�\���W啬\"�\�|��όoj���@e\�a���\r*,\�\�\�/M]�\�O�0\�Q�<�\�F�_\�y\�G�\� 1���\"?�\�,w�k�͊[\�W)�\�(`{\n\�~�\�Y��\�HH\�C���!��q���B�<\�\�\�Vbd*x(�uT�RmN�E~��:\�%c��2\��<M�in3�2��Q2�\�\��t\��\0\0\0��\0\0\0��|�\�n\�0�_\�\n\� ��߅�\�P�\�tY\�}�c\���\�.7��3�ό=�\�����P�\�\�|�\��\�mf\�\�˯��~�\�f���\�vQ\�\�|��k��`\�\�H7�>/��\��q~M��,�\'\�	�тA� �&sr�m\�k[\���\�\�qmo�t�(A� F+�\�\'B6r:[�\�>Kh\�\�\�\n*G\�H{�\Z�Os�^B%sႚ~S��P�,ɅKdS�x�ʒ1H\'B_�Ikd�d��l��\rrY2�H�U\���b�d�%,��v���<�E\�j�:5�\�=$U*\\\�IEGJMH`�\�		\�\�LH��vB�s�����.๏���K[j\�\nC�O4�\�\�\�\� 85\�r�t�� �A\�\Z\�\�G	����H\'\�����\�F\�!P4��\"p|\�6��(\�\�9a\�\�M�퀙Y�@#0,��Gp�\�5��>J�ٲ��YJ\�\�K*`fA�@!\���!�0�\�/�(af��y1�t�)�3�:\n�F`X�����\�\�G	7[�:3Dr�ڔ1*�\�l?#j\�	�тA� N��]�O\Z\�\�~\�\�\�<>Ɓ�j\�-�N%�\�bq5\�˝}�s�L\��n\���\�2h�Ma@K9�mJ\�\�\'\�\�[\�T�\�7A�\��ݬ�y�\��\0\0��\0\0\0��l�]�@���\�D\��\r�(�`�O�`���R\����}\�|i�3�^\�%�XםzP\�HH�/U�E�\�\\C��ve����9j߾6;O�\���I�\�\��l\��\�\'QkK�Z.]ө\Z��\�r�Ů�\�Y��\�\ZԝD\�5�\nm�<*\r� �Y�G\�J\�*b��Xq\�\�\�[\'\�\����O�\�\�ϮB�\�\0\0��\0PK\0\0\0\0\0!\0��N\0\0\� \0\0\0\0\0xl/theme/theme1.xml\�Y͋7��?sw�5\�%\�\�\�l�\�$d����\�QV32��%9�R(���Bo=�\�@\r��	$�\�\�\'\�\�#�\�$�lJZv\r�G������~z�t�ҽ�zG��_�P�=��ؘ$Ӗk8(4|OH��e	n�,�K۟~rm\�\�\��Dl��I9\�*\�����f8�\�&�\�H\�#�\��ޘ+�R�#��^�bP{}2!#\�\r�J{��O\�1�B\r�(\�W��%��\�òB��\�R\�!\��a�1;\�{\��(~h�%�\��/\�V&D\�YCn��2�L`|X\�s�\��j\� �Z{�_�\\\��\��Z��ҧh4����\�:\�n�a\rP�ա�W\�U\�\�\�_]�����נT���\�E�A)>\\Ç�f�g\�נ_[\�\�K\�^P��kPDIr��.��jw�\�d\�\�\��A��)\�Q�\r�\�RSLX\"7\�Z�\�2>\0�R$I\�\�\�O\����(9\�\�\�%\�o�&`�T)\rJU��>���#��02��]`�XR�xb\�\�L��+�\�7 /�={��\��=�\��\�_���*Kn%SS\�Տ_���\�_���\��7\�\�\'�\�Ŀ��˗���:��\�\�/�}��\�\�}�\�O�\�\���!���\�c\�&�a���?�\�0BĒ@\�v�\�\�\�^[ \�\�u�\�\�\�X\��<�kٺ�$���F�\�c�vw:ચ\���p�Lݓ󹉻�Бk\�.J�\0�\�3�W\�Rٍ�e\�\r���8�\�S��C���C�\�\�=2\�L���\����\�%Cr`%R.�Cb�\�\�e �\��\�\�m�èk\�=|d#a[ \�0~��\�\�\�h.Q\�R9D15��d\�2r�G&�/$Dz�)��c,�K\�:��\ZA�\n\��]\�6�Kr\�ҹ�3�=v؍P<s\�L�\�\�~&!E�w�I|�\�;D=CP�1ܷ	�\��f\"�\�j��\'��e\������t���e\�<�ص͉3;:�ڻSt�\�{�>sX\�a3\�\�\�W\"`�\�J�+\�\�U��`e��k\�)r�+e��m�goq�x(�ߤ�\ZD\�J]8\�Tz��M\�5\�\�\�)\�\�0���I\�Yg�z\�|]p+~o�\�`_\�=\��|j ���\�Qk�<a�\n݂��\\D��Zl؛6FV��\�\�ω�\'�w\�ws�[���:�(e\�D��	�,kzh�\��p��s\�yUs^\�����f\�^>�e\�k��Z\����Aj��|�\�&\��\�O��\�3!�\�\�ŻBw}�ь0�\�Q�\'�j\�\"��5�,ܔ#-\�q&?\'2ڏ\�ZCe\����L�Tx3&�c��u+�Э�N�x��\�Ng�������x)\\�C�J�\�Z=\�ޭ\�\�~\�TwY�(\�\�aLfQuQ_B^g�^ٙX\�tX\�PꗡZFq\�\n0mx\��\�E�\�A\�A�f�\�c������\nΙFz�3��Pb/3 �tSٺqyjui��E�-#�t��0\�0�\�,;͖�Yƺ��\�2O�b�r3\�kE\"\'��&&S\�\�;n��j�*#4k�\�\�\�x�#\�[�S�vI�n�wa���D�:\\�N\�1��{�\�-_-�\r4\��m+W�>Z\�@+�qt;\�x2�#i�\�Q�N�\�S�p��\�\��$\�½���:\�7�XX/+�����r\�\�1����\��w\�`\�h׼�\�9��#:�Pv��d�\�5��\�\�O+Oٚ��\�.<����O\�7\�\�si\�g�\�*\�\�t�\�;\�\r��CԲ*�n�N-r�k.�\�yJ�\�\�}��0-�\�2MY�NÊ��Q۴3,O\�6�muF8=�\'?ȝ\�Zu@,\�J���\�ܼ\�fw�<zp8�R\�PBo�#(�\�Ȕ6`�ܓY�߼9\'-�~)l\�J\�-�\Za�T�R����vV\���\\\�u*\�`�Q\\\�\��\\a\�Evi�\�\�.\�\�\�-ͅ��L_\��\��\�\\\�|q\� ���ʠYmvj�f�=(�N�\�\�\�:�^�[\�\rzݰ\�<�#\r\�\�nP\�7\n�r�[j%e~�Y��J;����� +c`\�)}d�\0�j���\0\0��\0PK\0\0\0\0\0!\0\�ㄣp\0\0�\0\0\r\0\0\0xl/styles.xml\�X\�o\�8~?\���\�\�4?Hr��\Z\�J{��ړ�\�$X\�đ\��\������-�R\���=�\�7\��\�\�Uʌ\"\nʳ\0\�72H�f\�\0�}F\�($\�b\�xF�%�0���i!��\�m��Ȋ\0m�\�\'�YD�\�\�\�$�/	)��*\�f��\�BMJ�\�X�o��f�\�0I�S��X|/�A\�\�K���ʭօ�4�|Zg\\\���\�\�Ȩl_8F%Z#Z�\�NJ#��\�\�k�$�ywl�Mu�@�y�lϴ�=\�+q�&\�䁪�\�4\�,�����\�f\�\���\�F\�l\Zqƅ!!J@��d8%��ft%�\Z�\���m-v�@��R�Y	Me�6<��Ԩ7�U�e)tWq̽��\�Ȥ�\��\�(�`6�t�Dd!�\���6�f�2\�X\�qGF�\�ڎw���3\Z+\�\��^(�\�²4˫\�\�bR�8@��\�\�V�r\n���C����\�r\�.\�\�V�Ǿ�R[�Jȓ1T\�v�!F�h6e$����\���<W\�q)��ͦ1\�k�a�\�o;�?*>�\0\�\r\�`�]e��p\�x�EC9i8@n�4�v\�oXy���HKD�S~Kv�q�\�*1�2\rS�	�쳪r���6�\�:�`=4Ɂ�OO2p��\�2]\�\�W[\�RU;���Ο\��#�\�,%j\�\0xz\�W�%��n�Z7�\�վ�ܴGg�iT\�k�g\�\r\�6��\r�vJu9�Fj�\�B\�?\���g�hV\�a�A�!�[\�5_!ĴQx(r�t��i]�\�6XG\�\�pA\0\�h�$�>��{*�J�G�:Ϥ\�!m \�w�`��\Z��΋\�~��W\�\�k䑪�������\�\ZzC�j���:�`6��\��\0_Z�psF�\�Q\�\"�\�*�\�P�\���󚕴v\��\r\���z\�ࡢ�\�\�\�.�g�݂�\�U\����n\�PG\�\0�	B�h��	�*)�4S\�H]\�����E5����7᧞p\�U\�\�\�Rݶ\�~w�(�I�K&\�w\�=�EbZ�@X3\�+}\�R�P��Y^l}:\�W`<�>�*>�Ϣ\�9jO\�\��\�\�i\�\�)4[#\�~.\�h�F)h�����1^ކ\�`d\�GwH��؛/���/�\�\�r�\���W\\/\��0hDmwR0��\r�\rSw�,@���+}�\�}\�cǷ>z�5��=p}<\Z���7=\�Y�\��\��v\�\�k(˴\��BK��&���M�6�R\�x}\�	���\�]6\��\0\0��\0PK\0\0\0\0\0!\0\�\�\'^\0\0\0\0\0\0\0xl/sharedStrings.xmlt�\�n\�@�\�x���@\nqi%��\�j���T�\�\�\�xa\�\�8m\�x\r^�\'\�\�Rj��8�\���\�Y/Nn��-\'�1,�\��8Ա�a�,.W\�\�$jBc\\�,v,\�I��\�BD	g�,�V�;.K�[�F\�\�\�uL\�(��M)]b\�Hˬޕ�oJol(��}\�eq��}�?z>ݿ8<*��\�j�\�i��\�(F�d4\�\�E�բ\�	�I���>�C3~^\�Z\�ǁK\�4~w�ҡ�][gu7����T�j����;�B\Zi\�\��~n\��\�\Z\�9>�/)n�\�w1\�\���Rf|,���1�j(?\�9�]\�X\�9y�\�\�5=b;��%qg&^O\�~e\�6>�!X�\�љ\�I\��Đ7ԓZW\�n \�rb2����->\�eC��u앺{v\�\�Y\�u΄�[�Sݧ\���7�ČX\��s�ʽ��ݴѣ����y9�DPmN\�r\ZժcA\�(\0\0�\�7�,Ɗ+9҂�,c�\�k\�\���篡\�5\'�Oy\�66Y�\�YC|t� \�7\�\��\�O3\�چ#�\�\�V�\01$e\�\�ׯ����z\�\�����dCX}z�Z{�\"F]��\�a��q\'���\�: \�G()5pV\�1�g|\�v\�\r�w���u�A��\���\�\0\0\0��\0PK\0\0\0\0\0!\0;m2K�\0\0\0B\0\0#\0\0\0xl/worksheets/_rels/sheet1.xml.rels����\�0E��Cx{�օCS7\"�U\�b�\�ۗ���{�e�\�\�p\�\�6��<�f�,Ժ�\�ch��{\�-�A�8\�\�	-<�a\�.��NNJ�ǐX��Q$�\�~\�ٱ�	��>\�\�I�y0\���Ь�jm�_�/N�\�,\�}W�:=RY�\�}<n��\�H�τI9�`>�H9\�E\��bA\�w��k}�m\�\���	\0\0��\0PK\0\0\0\0\0!\0�\��V�\0\0*\0\0\0	docProps/core.xml �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0|��n\�0�\���\�,7KW!q�m\�e0 6\�Ql�Ւ��뷟l\'NR��\�\�O\�/-\�_l�=c�ƻ��e\��k\�v+�c��dY$崪�\�\�0��\���%4|�\��7\�`\�\�E	͊\�\Z\�y�=ZgI\�R�\��(�a\�Oj��,��HJ+R�\�\�DdG��	\�B=\04p�Ѣ�\�\�L�0\��f\�P�PZC]�v:�{\�\�0\'�K4��m\�Y{3��\��\��\�fX57��\n�UK\r�\�X-���N��\�/�\�)H�ȇj�A\r]�To�v�:�ƫ(uj�LC\�	G\�U\"�ki�\��Ѡ�\�Uk�Wu�U\�h\��{�\�/�l�_1^x�4>��&JrF�>�*?o>\�>��,\�\"/>\�\�v[�r>��\�\��^W��Sc\�\'�?�̋2��Xȹ�\�\�xT\�\�T�;�q|���xG\�\�lH\�\�\�盩\�\�]�\0\0��\0PK\0\0\0\0\0!\0�Ed�\0\0\0�\0\0\0docProps/app.xml �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��MK1�\��!\�\�M�P�dS�*^�����\�n�ٙ�Ĳ�V�\�m>�w\�U�q\�\0){\�\��%\�o�\��qv\�Y.�	�\��	2_\�\���(B*2�\�-ߗ�Bd���䦶�v:J�)5M����\�\�~�E\\I�0@n\�@~$.\�PG�뾼\�N��\�m��[S\�z\�m�L]a����1x%~Ϩ�A\�C\�J��5\r\�\�_�\Z����{��z�b��\�\�L���\'��\�\�h=_4�Z\�o\�SM�K�\'\0\0\0��\0PK\0\0\0\0\0!\0L�&_\0\0�\0\0\0docProps/custom.xml �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\�n�0E�����\��&F@v��\�\"\��I��CءAU��Fi�}��;st\�d��\�,&;h�\�p	\�\�nP��\�`��u�\�Q+�\�EX�/�\�I1�AX\�\�\��\�I	�\�Y\�\�n|�|\�\�I6ΏӉ\�Z�u{�B9<��b����\�\�/�\���nW;�~\\�\�-���z\�.ǟ<a�\'�с� ��\nhL�\�\0�*b5-_�u9\�H5\�WgZ9��B_:O�]:�\��\��\r�\�-��1^\��\�\�@c�\�e\�#J\�:#����ZYuo\�,�\0\0��\0PK\0\0\0\0\0!\0\�\�G�\�\0\0,\0\0\'\0\0\0xl/printerSettings/printerSettings1.bin\�T\�J\�P=3�\�\�\�tQ�+q\���\�U��vJ҄$3�q1tR�ɐDD���\Z>H�.]��v!\�p�\�3ؖ��\�F�\�\�\�\�=97��|6\"|A�\�+r��\�<B\\\�9��b\���Ҝ��\'\�ڛԼ\\H*�\�\�*�\�\�\ZW!\�r�\�T��Kc��e��7�_��\�\�|\�.\���\�\��\�ã���؜/�\��\�*0��fy�s�|;������C\��:��:\Z\\7P���h�V�X\�\�d\�dTg�3oз�5\�*�od�L߰,t\�(\r3��Q��\�A\�Ӄ�Fa���(�\�:^\�mtxa�w�\ZCg��\�\�0I\�d����\�j\�\�=��\�\�h�%!�h\Z\��\�T�=�\�\�\�ǥ�\��֬�*w\\\n��W�:���E��	�\�.v\�Tg\�ߨn\�\�(\��S�\�p/�\�&\�>F\����:Ou��5��( \n���( \n���( \n���( \n̢�-\0\0\0��\0PK\n\0\0\0\0\0\0\0!\0����\�\0\0\�\0\0\0\0\0[trash]/0000.dat����\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PK\0\0\0\0\0!\0s\�|ڴ\0\0\0\�\0\0\0\0-\0customXml/itemProps1.xml �)\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\n\�0D\���K�E�B	\�\n^C���fW�(��\�\�4\�<�w<\�,޸��\�\�v�A \�\'\Z-ܮ�l@�\��3Z ��i�:�\�\��\�S\�/�(\�T�\�,|+g�F�Fv{��\�]%��\�\�\�ԭqmk\�n�Q\�Tn��G\�σR)<0��\�\'R�/\�\�R�Q�0L�WDʪҺV\�U��gP�?\0\0\0��\0PK\n\0\0\0\0\0\0\0!\0����\�\0\0\0\�\0\0\0\0\0\0[trash]/0001.dat����\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PK\0\0\0\0\0!\0�[N2�\0\0\0\�\0\0\0\0(\0customXml/itemProps2.xml �$\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�M\�0D\��!\�=�ըU����w�!\�~@�+MA�\�\�4\�<��;|� \�8��\�@>\�@ 9�{j\r\�oY�\�Rm&4@��t��ö�ц\�#^#z��>\�4�t~Y\�J\�E9���Z\�S~\�2ۜ���:\�\��@$5��`���U*��\r3~\"%\��\�mLul7M\�d��HQͳl�\�+\��\���\0\0\0��\0PK\0\0\0\0\0!\0��b#�\0\0\0\�\0\0\0\0(\0customXml/item3.xml �$\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0l�;\�0��ғ-\�\�\�4�\nQ\�\�8���\��.\�A��z�fv$�u\�GJ��g\Z<�٪�͋\�(�fRM{\0q�\'+-�Yx\�\�1�L6�\�!*<v�i��X]\�\�T_1=�;\�\�9\\�\�eI!� oA\�\'��\\\�@�;n\�\0\0\0��\0PK\0\0\0\0\0!\0aw\�)�\0\0\0\�\0\0\0\0(\0customXml/itemProps3.xml �$\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0���\�0E��Cx��X�FigB��\�lC�j\�{\�\�A��w��\�{\��\���\�9�LVK\r)p7\�\�\�\�\�J\"eO���\�1�����K�\�g�2\�x\�Eƒg\��n�?��F\�U���1;i�sR\�u\�\Zw޷Z��(j*7\��\�T\nF���@*�\�9�\\\�|W\��c@\�\�����ު�,��\'P\�\0\0\0��\0PK\0\0\0\0\0!\0t?9z\�\0\0\0(\0\0\0customXml/_rels/item1.xml.rels �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\���1\�\�;�ܝ\�x�\�xY���\�t23\�iS�(��O+,\�1	���\�?¬\�\�S4\�T5(��zG?\�\�\�����)��\'2\�\�=\�l�,�\���D60���\�\�&�+J\�d���2�:Yw�#\�u]ot�m@�a�Co �\���J��6\r�w�E\�0\�\�\�X(\\\�|̔�\�6�(�`x���\��k�\�\�\0\0��\0PK\0\0\0\0\0!\0\\�\'\"\�\0\0\0(\0\0\0customXml/_rels/item2.xml.rels �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\��j\�0\�{�\�`t_��0J�\�K\�6F�\ZGILc\�XJi\�~��;JB\�/5�{�\�\r3{�6U\r\n��\�\�\������\�bcog�h\���v�j~p�R�x�UQ\"�D\�^kv\�%�e2PVJ�G���\����?u~5�}3U\�\�]�uz����M\�\�\�-���\�\�B\�\�\�L��l�b��gk[�{A��~���\0\0��\0PK\0\0\0\0\0!\0{��\�\0\0\0(\0\0\0customXml/_rels/item3.xml.rels �(�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\��j\�0\�{a\�`t_�t0J�\�\�(\�6F�\ZGq\�b\�X\�X\�~��=JB\�/��߸�,(\�&GSH\��\�\���\�b\�dWJh\���\�i\�\�j�.�2��$6��\�\�\���ʘ\�d��Բx������m_u�5`�3\�8(\�ԁ:]rM~l\�<�o\�\����ݙ�\�W\\\�e��-\�@�\�\�KS\�=��\�\�\0\0��\0PK\n\0\0\0\0\0\0\0!\0�����	\0\0�	\0\0\0\0\0[trash]/0002.dat����\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0PK\0\0\0\0\0!\0ߢ`�@\0\0K\0\0\0)\0customXml/item2.xml �%\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��=o�0��J\�\�c����\�\�H�����\��\�\�vJ~~!M\�U�t�\�\�\�;]���\�\��\�\�4�F1ڀVjsj\�9(\\�][O\�\�\�.h�0��\Zԇ0U�x\�\�\�}4jᬷ*D\�*��$�s2B\��N�,覹x�\��\�,�\�b���_�n��\��S�x@�N\�Fى�~�䅻`�\��	\����\�<�	n�	֪����\�A�O\��A)\�)+���mq\Zo%\�\n	8\�r�\nq.\�h^WF\r\n\���� T�+�ed*�\���,U�	\�u\�CN3�2�Y)Ne�cN�\�	PY�8\�\�.]\����\��\��\�jlk�WХ\�K�\�o\�~\0\0\0��\0PK\0\0\0\0\0!\0�R籞	\0\0�-\0\0\0(\0customXml/item1.xml �$\0(� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�Z[o\�\�~?���L��+�\�R\�\Z����v�\\.-6�p��������\\\�%S�[E �)\�\�\�\�\�7\�\�\�\�o\�}�=���I�\�푥k$Ɖ\�O+=c�1\����%NbFb�}=�G�#{��\�?V��\�Q�\�/hOV�&�\�\�\�[�O\�7+\�:Z6����ۛ���]�77w�;Y\�~Z8\�\�ݍ�/�]S��\�Z0��\��\����3\� F4�\�\�E�sCFM�G��P�8�7n6\�\�N��eh:_ \�Zc\��L&���\����c\�4M*\�BG��	M6\�\�\�L� \�\���\�0\�#�̊\�J\�\rQtH�����\n\�7����1B�����\�H���Jc(}\"�o\n= _nt��V�$\�;K3\"~\rB���nA��\�ak��擱3;�e��I0\�\�\�L\�b:�)SG� �	������^�Q�>�\�\�\�\�>˼S;\��\��W/ؤ��\�>�{���=�]\�;�\�O��\�۟#\�f\�s��\�\�Jw\�\�u\�3l@$�k-|Û�ĘxS;�Ě��خpHR�\�\�F�Z\�T\�ݖ\�|!O\"\�\�U�\�+!P@N\"r\�8�Q�#\�(~�\�P���b�$�\�v\�BQ�\�*5)	V:O�\�葤\�PPy)A\��W��\��\�[~t\n\�!ʮR�HP�wߊ\�d\�W\��\ra�o�\�F{��p0��d��\��>� �f�\���g�T\�,�\�F\�n���L}+6��[��ă��Lb�\"�\�\�pϡ\��\����Dw\�*�C�Ɂ0\�,�s#�ĳ<\�x��߫Y\�_H�\0�����WIk�AwI�ߐ\0e�\�E!@��\�?���\�׷A�]\�&��l�\�y��8��\�؎c�\���Rٱ\�&Q\�\�\� ׻��4�@�a\�\�^(W�\��}��\04�c�W�ZeEȋ\�\�\��!=D\�U��*v�\��t�X�-�Q��&�k�\�E*CX\"RE��P �W�\�!\nB\�,�$�H�ETk\�/\�\�i�t�\�eQi�� 2-ٟ\':-���\r���\�\�\�uA�:\��P�l�e�\�\�vFcGؠ�	\��xF\�\�ܒ#��.{��2�Ng0:&q�W�\�OnuH굆\�rǏm(�\�\�ܢ\'N�в��\�#����g�\"Z9\�\�\�V�s��+��+ �>68�2�\�_b\re\��簲ɔ��\�tN��	1f�\��]Ã\�f\�[�\�\����\'��t�H��s\�žcL@\�\�\�2�c\�O\�v\�o\'�\�x��\\$�\�\�\r<\���Adnh6�\Z��H\�9v�2�kM�����$)W! ���8RW	Q�\�>\�\�<h\�WX�ع��\�\�Z�U]�\�H�t�\�\�IgN\��\�J\�J��麪2\��p\�Z�\�v�\�+˸\�b�x���^�M;\�>:�� 5�e��\�n\�VtA�\�\��\�I\"\�\�`\�k\����\�����>R(�\�\�[E��&hb&��PB[\'Q�\�\��lMR�\ZC��@s6\�lC�)\�\�\�	<h\�\�\�\�\�\�l1ue��s���t��j�\�\�L���_�w\�0���\����\n������\�+\')A(ֻ�]��\�{v(\�f�\Z�셿���d��[\�r\�j+\�b/\�\��\�9Au\�\�\�qn��_��\�c�2�� ��]�>VGG),����0�h�\Z�4��\��t!��bTL�a��`kڞ�2\�|����\�F/Y\\�xQ��S�?�l)�t�\�í4\n��\�\�\0\�cʀ:B�\�%�r8s\�\�HD\�\�fNӨi�l�|�xe4T�o&0j)�\� �Z4\�/��\����T\�6��s�\� �X\�ϼ(�۬��r#L�?�C29�\�\�\���XW9?\�e�r�=��\�6\�G#܍\�\�Y�z�G\�b\�TA�|�\�~Y�\\>�2kA\�}�\��5`>\�D�\Z�/\�T&\�\�\�)���5�4,C�b1>�\�	����:\�Ֆ\�\��ϧZ�@�|\'�kg��5�je\�4�_��E�dY�\���\�\��U䑮�\�Vȟ\n\�f\�\�\�\'����22�\�\���y�Փ\�D(~\�\0��\�UO�����l[�g�%��(K\�s\����ڊ��\�	LSO\��Z=\�N�\�\�B�=s*�A~�<DTc;�\�\�\�#��\ZE\��,I5e$i[x\�t��A��\09�!��V\�>|?��b	@�k\�]�l�\�/]�I�\��B>E5o�D��Mr�\"~�_U\��!�W\�~\r���ڳ�\�J\�\Z\�<\�\�e�\�Cx�\�u�\�92-��\�?s�\\I����\�K���<6\n�\�\�|�/�@9\�UZ��d�\�iq;�f\\��\Zb��\�o,��o0\�\r3�Ტ\�\�;Jkeȟڰ��\��?\�ӰU��\�d\Z\\�l��Ke9Ѩ8:XXzz��\�f}Ci�C�<�p�:x�AW���\�T+.͍�8g\0J�Z�M\�_\�>䐴|/ߞsr�E_)#�����%{���BS8%\�+\�J?d�5�/\�t=\�\n�V8�j\�ɷ��oi\�\�@[��ꩦ�Se\�\�7\n��w�ddk�\\#��l�Tq=7U\���$\�_�\0_Қ{.چZᏯ�u��\�̼J\�/��?yK������+;}9l\��cCe��\�{=\\6{�0\��pa\�\�\�°ߗo\�\�\�\�B\�\���F�\r\�Q�0\�\ZDW��\�\�\�o�w(2���q\��r\�������i1��v��\�\0\0\0��\0PK-\0\0\0\0\0\0!\0\��9�\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0[Content_Types].xmlPK-\0\0\0\0\0\0!\0^�e\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�\0\0_rels/.relsPK-\0\0\0\0\0\0!\0�\�a��\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0xl/workbook.xmlPK-\0\0\0\0\0\0!\0ߤg(\Z\0\0d\0\0\Z\0\0\0\0\0\0\0\0\0\0\0\0\0\�\n\0\0xl/_rels/workbook.xml.relsPK-\0\0\0\0\0\0!\0n�\�\�j\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+\r\0\0xl/worksheets/sheet1.xmlPK-\0\0\0\0\0\0!\0��N\0\0\� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�\0\0xl/theme/theme1.xmlPK-\0\0\0\0\0\0!\0\�ㄣp\0\0�\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0J\Z\0\0xl/styles.xmlPK-\0\0\0\0\0\0!\0\�\�\'^\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�\0\0xl/sharedStrings.xmlPK-\0\0\0\0\0\0!\0;m2K�\0\0\0B\0\0#\0\0\0\0\0\0\0\0\0\0\0\0\0u!\0\0xl/worksheets/_rels/sheet1.xml.relsPK-\0\0\0\0\0\0!\0�\��V�\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0w\"\0\0docProps/core.xmlPK-\0\0\0\0\0\0!\0�Ed�\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0R%\0\0docProps/app.xmlPK-\0\0\0\0\0\0!\0L�&_\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\'\0\0docProps/custom.xmlPK-\0\0\0\0\0\0!\0\�\�G�\�\0\0,\0\0\'\0\0\0\0\0\0\0\0\0\0\0\0\0\�)\0\0xl/printerSettings/printerSettings1.binPK-\0\n\0\0\0\0\0\0\0!\0����\�\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�+\0\0[trash]/0000.datPK-\0\0\0\0\0\0!\0s\�|ڴ\0\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�4\0\0customXml/itemProps1.xmlPK-\0\n\0\0\0\0\0\0\0!\0����\�\0\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�5\0\0[trash]/0001.datPK-\0\0\0\0\0\0!\0�[N2�\0\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\07\0\0customXml/itemProps2.xmlPK-\0\0\0\0\0\0!\0��b#�\0\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\08\0\0customXml/item3.xmlPK-\0\0\0\0\0\0!\0aw\�)�\0\0\0\�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\09\0\0customXml/itemProps3.xmlPK-\0\0\0\0\0\0!\0t?9z\�\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0:\0\0customXml/_rels/item1.xml.relsPK-\0\0\0\0\0\0!\0\\�\'\"\�\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0\0customXml/_rels/item2.xml.relsPK-\0\0\0\0\0\0!\0{��\�\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$>\0\0customXml/_rels/item3.xml.relsPK-\0\n\0\0\0\0\0\0\0!\0�����	\0\0�	\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+@\0\0[trash]/0002.datPK-\0\0\0\0\0\0!\0ߢ`�@\0\0K\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\�I\0\0customXml/item2.xmlPK-\0\0\0\0\0\0!\0�R籞	\0\0�-\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0K\0\0customXml/item1.xmlPK\0\0\0\0\0\0�\0\0vU\0\0\0\0','Resume','docx');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_data`
--

DROP TABLE IF EXISTS `test_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_data` (
  `test_id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(32) DEFAULT NULL,
  `area` int DEFAULT NULL,
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_data`
--

LOCK TABLES `test_data` WRITE;
/*!40000 ALTER TABLE `test_data` DISABLE KEYS */;
INSERT INTO `test_data` VALUES (1,'Toronto',10);
/*!40000 ALTER TABLE `test_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `MFA_enabled` tinyint(1) DEFAULT '0',
  `2fa_secret` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test@example.com','password123',1,'PJYGKSRDMFWHKJDPKFHGCPTQNFKEWUSG'),(2,'newuser@example.com','newpassword123',1,'NFSDAOJZPVDXO4LCFZCXWKTYMRSEQVC6'),(3,'newuser2@example.com','newpassword',0,NULL),(4,'tes4t@test.ca','$2b$10$zUmzHskKfYXM.Ddi2JLqSu8V03JpY5voUKYy/zNimB7GcADXkx0me',0,''),(5,'test5@test.ca','$2b$10$q02/peMdME5SO6b.NF2PcOK6NiHlCFxdVMhzZMvmKGyrSXCpLnch2',1,NULL),(6,'test51@test.ca','$2b$10$jQ4FtklRYtDoLr6afdxykeEB9W/.fdXopXhRdZM38o/qRcuS9Q98q',1,'PVKDKI3EKN3WC2B6NNICYP2CJJKDMRDH');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-20  0:06:42
