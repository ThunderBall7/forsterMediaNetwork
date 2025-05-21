import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="border rounded-full p-1 border-[#4f94fc]">
            <svg fill="#4f94fc" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#4f94fc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,6H16a1,1,0,0,0,0,2h2.59L13,13.59l-3.29-3.3a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,12.41l3.29,3.3a1,1,0,0,0,1.42,0L20,9.41V12a1,1,0,0,0,2,0V7A1,1,0,0,0,21.92,6.62Z"></path></g>
            </svg>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Targeted Audience</CardTitle>
            {/* <CardDescription>@Saumya_gone</CardDescription> */}
          </div>
        </CardHeader>

        <CardContent>Connect with decision-makers and quality B2B prospects!</CardContent>
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <svg viewBox="0 0 1024 1024" className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover p-1 border bg-white" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M431.210328 664.289632c59.041323 0 110.744461-30.925432 140.158639-77.368871l-140.158639-88.57632V332.400275c-91.648999 0-165.944166 74.296191-165.944166 165.944166S339.561329 664.289632 431.210328 664.289632zM661.805686 424.473163H772.913626v32.566721H661.805686zM661.805686 539.650023H772.913626v32.566721H661.805686zM242.274817 737.921321h419.530869v32.56672H242.274817zM242.274817 814.547875h496.157423v32.56672H242.274817z" fill="#4f94fc"></path><path d="M790.971891 177.362535h-94.079703c0-38.072152-30.970483-69.042635-69.042635-69.042635h-3.944006c-9.495513-26.78996-35.094693-46.028765-65.098629-46.028765h-92.05753c-30.003936 0-55.603116 19.238805-65.098629 46.028765h-3.944006c-38.072152 0-69.042635 30.970483-69.042635 69.042635h-94.079703c-36.960212 0-67.020462 30.071512-67.020462 67.031725v648.433743c0 36.960212 30.060249 67.020462 67.020462 67.020462h556.387476c36.960212 0 67.020462-30.060249 67.020462-67.020462V244.393236c-0.001024-36.959189-30.061273-67.030701-67.020462-67.030701z m-416.280032 0c0-12.686963 10.326907-23.01387 23.01387-23.01387h46.028765v-23.01387c0-12.686963 10.326907-23.01387 23.01387-23.013871h92.05753c12.686963 0 23.01387 10.326907 23.01387 23.013871v23.01387h46.028765c12.686963 0 23.01387 10.326907 23.01387 23.01387v46.028765c0 12.686963-10.326907 23.01387-23.01387 23.013871H397.706753c-12.686963 0-23.01387-10.326907-23.013871-23.013871v-46.028765z m437.270705 715.464444c0 11.575024-9.416673 20.991697-20.991697 20.991697H234.583391c-11.575024 0-20.991697-9.416673-20.991697-20.991697V244.393236c0-11.586286 9.416673-21.00296 20.991697-21.00296h94.079703c0 38.072152 30.970483 69.042635 69.042635 69.042636h230.1428c38.072152 0 69.042635-30.970483 69.042635-69.042636h94.079703c11.575024 0 20.991697 9.416673 20.991697 21.00296v648.433743z" fill="#4f94fc"></path><path d="M431.508279 321.201017c-97.957157 0-177.641032 79.684899-177.641032 177.641033S333.552146 676.484106 431.508279 676.484106c61.243701 0 117.386405-30.925432 150.177356-82.718672 17.968164-28.374934 27.4647-61.19865 27.4647-94.92236 0-97.957157-79.684899-177.642056-177.642056-177.642057z m130.736846 260.248101c-28.554114 45.096005-77.426208 72.021118-130.735822 72.021117-85.257907 0-154.627162-69.368231-154.627162-154.627161s69.368231-154.627162 154.627162-154.627162 154.627162 69.368231 154.627162 154.627162c-0.001024 29.362983-8.260707 57.92836-23.89134 82.606044z" fill="#4f94fc"></path></g>
          </svg>
          <CardTitle className="text-center">Data-Driven Strategy</CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Optimize your LinkedIn presence with analytics and insights.
          </p>
        </CardContent>

        <CardFooter>
          <CardFooter className="flex flex-col items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground text-center">
            Ready to fuel growth in your business?
          </span>

        </CardFooter>

        </CardFooter>
      </Card>

      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Essential
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Smart start
            </Badge>
          </CardTitle>


          <CardDescription>
            Experience & Observe engagement in first week of campaign, Jumpstart your LinkedIn strategy with our proven B2B approach.
          </CardDescription>
        </CardHeader>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Data-Driven Analytics", "Targeted Lead Generation", "Profile Optimization", "Weekly Performance Reports", "Connection Growth Strategy"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Profile Revamp</CardTitle>
            <CardDescription className="text-md mt-2">
              Optimize your LinkedIn presence with analytics and insights.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
