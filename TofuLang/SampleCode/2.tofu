"calculate tax rates";

TotalBillCost(taxrate, subtotal) = subtotal * taxrate + subtotal;

while(true) is true then {
    inputTaxRate = input("Tax Rates: ");
    inputSubtotal = input("Subtotal: ");

    print(TotalBillCost(toNumber(inputTaxRate), toNumber(inputSubtotal)));
} 