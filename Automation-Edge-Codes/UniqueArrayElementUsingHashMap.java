/*
Q1. Write a java program to find the unique value from array.
Input array elements: 1, 2, 3, 5, 1, 5, 20, 2, 12, 10
All unique elements in the array are: 3, 20, 12, 10
*/

import java.util.*;

public class UniqueArrayElementUsingHashMap{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[10];

	System.out.println("Enter Array Elements : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	HashMap<Integer,Integer> map = new HashMap<>();
	
	for(int i :a){
	  if(map.containsKey(i)){
		map.put(i,map.get(i)+1);
	  }
	  else{
	    map.put(i,1);
	  }
	}

	System.out.println("Unique Elements From the Array :");

	Set<Map.Entry<Integer,Integer>> set = map.entrySet();

	for(Map.Entry<Integer,Integer> entry : set){
	 if(entry.getValue() == 1)
	  System.out.println(entry.getKey());
	}

	}
}