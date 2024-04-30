import React from "react";
import logo_secondary from "./../assets/icons/logo_secondary.svg";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  EnterFullScreenIcon,
  HomeIcon,
  InfoCircledIcon,
  PlusCircledIcon,
  ReloadIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

function Home() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState("study");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="m-10">
      <div>
        <Breadcrumb className="mx-16">
          <BreadcrumbList>
            <BreadcrumbItem>
              <HomeIcon width={20} height={20} color="#3A3740" />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-lg text-gray-600">
              Flashcards
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-lg text-gray-600">
              Mathematics
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg text-[#06286E] font-semibold">
                Relation and Function
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <h1 className="my-10 mx-16 mt-14 text-3xl bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent font-bold">
        Relations and Functions (Mathematics)
      </h1>
      <div>
        <div className="w-full mb-4">
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => {
              if (value) setActiveTab(value);
            }}
            className="gap-6"
          >
            <ToggleGroupItem
              value="study"
              className={cn(
                activeTab === "study" &&
                  "border-b-2 border-b-[#06286E] text-[#06286E] font-bold bg-transparent",
                "rounded-none"
              )}
            >
              Study
            </ToggleGroupItem>
            <ToggleGroupItem
              value="quiz"
              className={cn(
                activeTab === "quiz" &&
                  "border-b-2 border-b-[#06286E] text-[#06286E] font-bold bg-transparent",
                "rounded-none"
              )}
            >
              Quiz
            </ToggleGroupItem>
            <ToggleGroupItem
              value="test"
              className={cn(
                activeTab === "test" &&
                  "border-b-2 border-b-[#06286E] text-[#06286E] font-bold bg-transparent",
                "rounded-none"
              )}
            >
              Test
            </ToggleGroupItem>
            <ToggleGroupItem
              value="game"
              className={cn(
                activeTab === "game" &&
                  "border-b-2 border-b-[#06286E] text-[#06286E] font-bold bg-transparent",
                "rounded-none"
              )}
            >
              Game
            </ToggleGroupItem>
            <ToggleGroupItem
              value="others"
              className={cn(
                activeTab === "others" &&
                  "border-b-2 border-b-[#06286E] text-[#06286E] font-bold bg-transparent",
                "rounded-none"
              )}
            >
              Others
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <Carousel className="w-[712px] h-[394px] m-auto " setApi={setApi}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="rounded-[42px] bg-gradient-to-bl from-[#051A91] via-[#061C93] via-[#2284F1] to-[#1F80EB]">
                      <CardContent className="flex aspect-[6/3] items-center justify-center p-6 relative">
                        <span className="text-[38px] font-bold text-white ">
                          9 + 6 + 7x - 2x - 3
                        </span>
                        <Button
                          variant="ghost"
                          className="rounded-full aspect-square w-[50px] h-[50px] p-2 absolute top-6 left-6"
                        >
                          <InfoCircledIcon
                            width={30}
                            height={30}
                            color="#fff"
                          />
                        </Button>
                        <Button
                          variant="ghost"
                          className="rounded-full aspect-square w-[50px] h-[50px] p-2 absolute top-6 right-6"
                        >
                          <SpeakerLoudIcon
                            width={30}
                            height={30}
                            color="#fff"
                          />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between items-center mx-6 mt-4">
              <Button
                variant="ghost"
                className="rounded-full aspect-square w-[50px] h-[50px] p-2"
              >
                <ReloadIcon width={30} height={30} color="#06286E" />
              </Button>
              <div className="flex items-center gap-8">
                <CarouselPrevious className="bg-gradient-to-b from-[#06286E] to-[#164EC0] w-[60px] h-[60px]" />
                <span>
                  {current}/{count}
                </span>
                <CarouselNext className="bg-gradient-to-b from-[#06286E] to-[#164EC0] w-[60px] h-[60px]" />
              </div>
              <Button
                variant="ghost"
                className="rounded-full aspect-square w-[50px] h-[50px] p-2"
              >
                <EnterFullScreenIcon width={30} height={30} color="#06286E" />
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex justify-between items-center mt-16">
        <img src={logo_secondary} alt="" className="w-[217px]" />
        <Button
          variant="ghost"
          className="text-[28px] font-semibold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent"
        >
          <PlusCircledIcon
            className="mr-2 "
            width={50}
            height={50}
            color="#06286E"
          />
          create Flashcard
        </Button>
      </div>
      <div className="mt-14">
        <h2 className="text-[48px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent mb-6">
          FAQ
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="border border-[#217EEC] mb-4 px-4 rounded-lg max-w-[848px]"
          >
            <AccordionTrigger>
              Can education flashcards be used for all age groups?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-[#217EEC] mb-4 px-4 rounded-lg max-w-[848px]"
          >
            <AccordionTrigger>
              How do education flashcards work?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-[#217EEC] mb-4 px-4 rounded-lg max-w-[848px]"
          >
            <AccordionTrigger>
              Can education flashcards be used for test preparation?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Home;
