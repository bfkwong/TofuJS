"calculate tax rates";

TotalBillCost(taxrate, subtotal) = subtotal * taxrate + subtotal;

print(TotalBillCost(0.075, 10));
