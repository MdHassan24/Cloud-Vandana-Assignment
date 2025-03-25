import java.util.Arrays;
import java.util.Scanner;

public class AnagramCheck {

    public static boolean isAnagram(String s, String t) {
        if(s.length() != t.length()){
         return false;
        }
 
        int[] ch = new int[26];
 
        for(int i=0; i<s.length(); i++){
         ch[s.charAt(i) - 'a']++;
         ch[t.charAt(i) - 'a']--;
        }
 
        for(int i=0; i<ch.length; i++){
         if(ch[i] != 0){
             return false;
         }
        }
 
        return true;
     }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();

        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();

        if (isAnagram(str1, str2)) {
            System.out.println(true);
        } else {
            System.out.println(false);
        }

        scanner.close();
    }
}
