public class Forecast {
    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue * (1 + rate), rate, years - 1);
    }
}
