import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@repo/ui/button";
import { UserInputType } from "common";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Button appName="BOOP" />
      <button
        onClick={() => {
          let userDetail: UserInputType = {
            email: "",
            password: "",
          };
        }}
      ></button>
    </main>
  );
}
