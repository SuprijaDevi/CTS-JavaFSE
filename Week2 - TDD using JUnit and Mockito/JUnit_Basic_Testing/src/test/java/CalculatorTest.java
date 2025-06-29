import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    public int multiply(int a, int b) {
        return a * b;
    }
}

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
        int a = 2;
        int b = 3;

        int result = calculator.add(a, b);

        assertEquals(5, result);
    }

    @Test
    public void testMultiplication() {
        int a = 4;
        int b = 5;

        int result = calculator.multiply(a, b);

        assertEquals(20, result);
    }
}
