public class TestForecast {
    public static void main(String[] args) {
        double present = 1000.0;
        double rate = 0.05;
        int years = 5;

        double result = Forecast.futureValue(present, rate, years);

        System.out.printf("Predicted future value after %d years: %.2f\n", years, result);
    }
}
