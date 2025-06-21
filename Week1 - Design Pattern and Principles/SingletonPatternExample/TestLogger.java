public class TestLogger {
    public static void main(String[] args) {
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        if(log1 == log2) {
            System.out.print("Test passes with one Logger instance");
        } else {
            System.out.print("Test failed with multiple Logger instance");
        }
    } 
}