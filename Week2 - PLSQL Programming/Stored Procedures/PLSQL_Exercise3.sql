-- Optional: Drop procedures if they already exist
BEGIN
  EXECUTE IMMEDIATE 'DROP PROCEDURE ProcessMonthlyInterest';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

BEGIN
  EXECUTE IMMEDIATE 'DROP PROCEDURE UpdateEmployeeBonus';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

BEGIN
  EXECUTE IMMEDIATE 'DROP PROCEDURE TransferFunds';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

-- Drop tables if they already exist
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Accounts';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION WHEN OTHERS THEN NULL;
END;
/

-- Create Accounts table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20), 
    Balance NUMBER(10, 2)
);

-- Insert data into Accounts table
INSERT INTO Accounts VALUES (201, 1, 'Savings', 10000);
INSERT INTO Accounts VALUES (202, 2, 'Savings', 15000);
INSERT INTO Accounts VALUES (203, 3, 'Current', 8000);
INSERT INTO Accounts VALUES (204, 1, 'Savings', 5000);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DepartmentID NUMBER,
    Salary NUMBER(10, 2)
);

-- Insert data into Employees table
INSERT INTO Employees VALUES (101, 'Arun Kumar', 10, 40000);
INSERT INTO Employees VALUES (102, 'Beena Nair', 10, 45000);
INSERT INTO Employees VALUES (103, 'Charles D', 20, 50000);
INSERT INTO Employees VALUES (104, 'Divya R', 20, 55000);

COMMIT;

-- Procedure 1: Apply monthly interest to savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE Accounts
  SET Balance = Balance + (Balance * 0.01)
  WHERE AccountType = 'Savings';

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error while processing interest: ' || SQLERRM);
END;
/

-- Procedure 2: Update bonus by department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  p_DepartmentID IN NUMBER,
  p_BonusPercent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_BonusPercent / 100)
  WHERE DepartmentID = p_DepartmentID;

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department ' || p_DepartmentID);
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error updating bonus: ' || SQLERRM);
END;
/

-- Procedure 3: Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
  p_FromAccountID IN NUMBER,
  p_ToAccountID IN NUMBER,
  p_Amount IN NUMBER
) IS
  v_FromBalance NUMBER;
BEGIN
  IF p_Amount <= 0 THEN
    RAISE_APPLICATION_ERROR(-20001, 'Transfer amount must be greater than zero.');
  END IF;

  SELECT Balance INTO v_FromBalance
  FROM Accounts
  WHERE AccountID = p_FromAccountID;

  IF v_FromBalance < p_Amount THEN
    RAISE_APPLICATION_ERROR(-20002, 'Insufficient balance in source account.');
  END IF;

  UPDATE Accounts
  SET Balance = Balance - p_Amount
  WHERE AccountID = p_FromAccountID;

  UPDATE Accounts
  SET Balance = Balance + p_Amount
  WHERE AccountID = p_ToAccountID;

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error during fund transfer: ' || SQLERRM);
END;
/

-- Enable DBMS_OUTPUT
SET SERVEROUTPUT ON;

-- Execute Procedure 1
EXEC ProcessMonthlyInterest;

-- Execute Procedure 2
BEGIN
  UpdateEmployeeBonus(10, 10);
END;
/

-- Execute Procedure 3
BEGIN
  TransferFunds(201, 204, 2000);
END;
/
