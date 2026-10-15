// #include <stdio.h>
// int main(){
//     char name[] = "";
//     double res = 1.8;
//     printf("%.lf F\n this is test",res);
//     printf("my Name is pablo");
//     return 0;
// }

#include<stdio.h>
int main(){
    double num2;
    double num1;
    char opp;
    printf("print your first num\n");
    scanf("%lf", &num1);
    printf("print your second num\n");
    scanf("%lf", &num2);
    printf("print your operrator\n");
    scanf("%c", &opp);
    if (opp =='+'){
        double res = num1 + num2;
        printf("The res %lf", res);
    }
    else if (opp =='*')
    {
        double res = num1 * num2;
        printf("The res %lf", res);
    }
    else if (opp =='-')
    {
        double res = num1 - num2;
        printf("The res %lf", res);
    }

    
}