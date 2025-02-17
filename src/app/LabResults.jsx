"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const analysisIndicators = [
  {
    name: "Лейкоцитлар",
    test_report: "WBS",
    normal: "4 - 10,0",
    default: "5.4",
  },
  {
    name: "Лимфоцитлар",
    test_report: "Lymph #  ",
    normal: "0,8 - 4,0",
    default: "1.4",
  },
  {
    name: "Моноцитлар",
    test_report: "Mid #",
    normal: "0,1 - 1,5",
    default: "0.5",
  },
  {
    name: "Гранулоцитлар",
    test_report: "Gran #",
    normal: "2,0 - 7,0",
    default: "3.5",
  },
  {
    name: "Лимфоцитлар",
    test_report: "Lymph %",
    normal: "20,0 - 40,0",
    default: "25.1",
  },
  {
    name: "Моноцитлар",
    test_report: "Mid %",
    normal: "3,0 - 15,0",
    default: "9.5",
  },
  {
    name: "Гранулоцитлар",
    test_report: "Gran %",
    normal: "50,0 - 70,0",
    default: "65.4",
  },
  {
    name: "Гемоглобин",
    test_report: "HGB",
    normal: "130 - 160",
    default: "9.7",
  },
  {
    name: "Эритроцитлар",
    test_report: "RBC",
    normal: "3,50 - 5,50",
    default: "5.07",
  },
  {
    name: "Ранг кўрсатгич",
    test_report: "",
    normal: "0,8 - 1,05",
    default: "0.98",
  },
  {
    name: "Гематокрит",
    test_report: "HCT",
    normal: "37,0 - 54,0",
    default: "44.3",
  },
  {
    name: "Эритроцит ўртача хажми",
    test_report: "MCV",
    normal: "80,0 - 100,0",
    default: "87.5",
  },
  {
    name: "Эритроцитдаги гемоглобин миқдори",
    test_report: "MCH",
    normal: "27,0 - 34,0",
    default: "28.2",
  },
  {
    name: "Эритроцитдаги гемоглобиннинг ўртача концентрацияси",
    test_report: "MCHC",
    normal: "320 - 360",
    default: "322",
  },
  {
    name: "Эритроцитларнинг тарқалиш кенглиги",
    test_report: "RDW-SD",
    normal: "11,0 - 16,0",
    default: "14.7",
  },
  {
    name: "Эритроцитларнинг тарқалиш кенлигининг стандарт чегараси",
    test_report: "RDW-SD",
    normal: "35,0 - 56,0",
    default: "46.2",
  },
  {
    name: "Тромбоцитлар",
    test_report: "PLT",
    normal: "100 - 300",
    default: "263",
  },
  {
    name: "Тромбоцитларнинг ўртача хажми",
    test_report: "MPV",
    normal: "6,5 - 12,0",
    default: "10.1",
  },
  {
    name: "Тромбоцитларнинг тарқалиш кенглиги",
    test_report: "PDW",
    normal: "9,0 - 17,0",
    default: "14.9",
  },
  {
    name: "Тромбоцитларнинг ўртача хажми",
    test_report: "PCT",
    normal: "0,108 - 0,282",
    default: "0.265",
  },
  {
    name: "Эритроцитлар чўкиш тезлиги СОЭ",
    test_report: "",
    normal: "2 - 15",
    default: "17",
  },
  {
    name: "Кон ивиш вакти",
    test_report: "",
    normal: "",
    default: "",
  },
];

export default function LabResults() {
  const [results, setResults] = useState(
    analysisIndicators.map((indicator) => indicator.default || "")
  );
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const handleChange = (index, value) => {
    const newResults = [...results];
    newResults[index] = value;
    setResults(newResults);
  };

  const handlePrint = () => {
    const printContents = document.getElementById("news-details").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Sahifani qayta yuklash
  };

  return (
    <div className="max-w-4xl mx-auto font-bold px-8 py-2" id="news-details">
      <div className="h-[130px] flex items-center">
        <div className="h-full w-[30%] relative">
          <Image src="/logo.png" fill alt="s" className="object-contain" />
        </div>
        <div className="h-fit w-[70%] border-[#003da6] border-4 p-2 text-sm">
          <p>Манзил: Норин туман Норинкапа МФЙ 67 - уй</p>
          <p>Cаll Center: 95-120-61-61, 78-113-66-14</p>
          <p>Telegram: 95-120-61-61</p>
          <p>Instagram: @impuls_klinika</p>
        </div>
      </div>

<div className="text-center text-red-500 uppercase">Umumiy qon taxlili</div>

      <div className="mb-1 flex items-end gap-3 justify-between">
        <div className="flex items-center gap-3">
          <h1>FIO: </h1>
          <Input
            className="border-0 shadow-none  rounded-none border-b border-black w-[250px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h1>Tug'ilgan yil:</h1>
          <Input
            value={birthYear}
            className="border-0 shadow-none rounded-none border-b border-black w-[150px]"
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </div>
        <div>
          <p>Sana: {date}</p>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-[50px] bg-[#003da6] text-white">
              №
            </TableHead>
            <TableHead className="w-[450px] bg-[#003da6] text-white">
              <div className="flex items-center justify-between">
                <p>Tahlil Ko'rsatkichi</p> (test report)
              </div>
            </TableHead>
            <TableHead className="text-center w-[120px] bg-[#003da6] text-white">
              Norma REF
            </TableHead>
            <TableHead className="w-[120px] bg-[#003da6] text-white">
              Natija
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {analysisIndicators.map((indicator, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center justify-between">
                  <p>{indicator.name}</p>
                  {indicator.test_report}
                </div>
              </TableCell>
              <TableCell className="text-center">{indicator.normal}</TableCell>
              <TableCell className="text-center">
                <Input
                  className="border-none shadow-none text-center"
                  type="text"
                  value={results[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
