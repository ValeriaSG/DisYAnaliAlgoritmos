/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package tarea6;
import java.util.Scanner;

/**
 *
 * @author usuario
 */
public class Tarea6 {
//Se calcula el Promedio de los elementos del arreglo 
    public static double Prom(int[] A) {//arreglo a
        double suma = 0;
        for (int elemento : A) {
            suma += elemento;
        }
        double promedio = suma / A.length;
        return promedio;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //Se solicita la cantidad de elementos que tendra el arreglo A 
        System.out.print("Cantidad de elementos en el arreglo: ");
            int n = scanner.nextInt();
            int[] arreglo = new int[n];
        //Se ingresa cuales seran los elementos del arreglo A
        System.out.println("Los elementos del arreglo son: ");
            for (int i = 0; i < n; i++) {
            System.out.print("Elemento " + (i + 1) + ": ");
            arreglo[i] = scanner.nextInt();
        }
        double promedio = Prom(arreglo);
        //Se obtiene la respuesta del promedio 
        System.out.println("El promedio en el arreglo A es de: " + promedio); 
        
        scanner.close();
    }
}
