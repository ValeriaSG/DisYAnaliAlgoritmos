/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package problem2;
import java.util.Scanner;

/**
 *
 * @author usuario
 */
public class Problem2 {

    public static int NumMinimo(int[] A) {
        int minValue = A[0];
        for (int i = 0; i < A.length; i++) {
            if (A[i] < minValue) {
                minValue = A[i];
            }
        }
        
        return minValue;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingrese el tamaño del arreglo: ");
        int size = scanner.nextInt();
        
        int[] arr = new int[size];
        
        System.out.println("Ingrese los elementos del arreglo:");
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }
        
        int minValue = NumMinimo(arr);
        System.out.println("El índice del menor elemento es: " + minValue);
        
        scanner.close();
    }
}
