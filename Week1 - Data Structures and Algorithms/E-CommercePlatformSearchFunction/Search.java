import java.util.Arrays;
import java.util.Comparator;

public class Search {

    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0) return products[mid];
            else if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] productList = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Book", "Stationery"),
            new Product(104, "Mobile", "Electronics"),
            new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search:");
        Product foundLinear = linearSearch(productList, "Book");
        if (foundLinear != null)
            System.out.println("Found: " + foundLinear.productName);
        else
            System.out.println("Not found");

        Arrays.sort(productList, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("\nBinary Search:");
        Product foundBinary = binarySearch(productList, "Book");
        if (foundBinary != null)
            System.out.println("Found: " + foundBinary.productName);
        else
            System.out.println("Not found");
    }
}
