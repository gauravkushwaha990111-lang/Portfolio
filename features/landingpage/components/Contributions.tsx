"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import ContributionGraph, { ContributionData } from '@/components/smoothui/contribution-graph'
import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion';

// Generate sample contribution data
const generateSampleData = (year: number): ContributionData[] => {
  const data: ContributionData[] = [];
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    // Randomly generate contribution data
    const count = Math.random() < 0.3 ? Math.floor(Math.random() * 20) : 0;
    const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / 4));
    data.push({
      date: date.toISOString().split("T")[0],
      count,
      level,
    });
  }
  return data;
};

const Contributions = () => {
    const [year, setYear] = useState(new Date().getFullYear());
  const [showLegend, setShowLegend] = useState(true);
  const [showTooltips, setShowTooltips] = useState(true);
  
  const [githubData, setGithubData] = useState<ContributionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Your actual GitHub username (taken from the Footer)
  const username = "gauravkushwaha990111-lang";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        if (res.ok) {
          const json = await res.json();
          const flatData = json.contributions.flat();
          const mappedData: ContributionData[] = flatData.map((item: any) => {
            const count = item.contributionCount;
            let level = 0;
            if (count > 0 && count <= 2) level = 1;
            else if (count > 2 && count <= 5) level = 2;
            else if (count > 5 && count <= 10) level = 3;
            else if (count > 10) level = 4;
            return { date: item.date, count, level };
          });
          setGithubData(mappedData);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGithubData();
  }, [username]);

  // Displays real data if loaded, otherwise falls back to temporary sample data
  const dataToDisplay = useMemo(() => {
    if (githubData.length > 0) {
      return githubData.filter((item) => item.date.startsWith(year.toString()));
    }
    return generateSampleData(year);
  }, [githubData, year]);

  return (
     <div className="relative space-y-6 bg-transparent px-8 flex flex-col justify-center items-center pt-20 pb-20 w-full overflow-hidden">
        {/* Ambient Glow for Contributions */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.1 }}
            className="relative z-10 flex justify-center flex-col mt-30 mb-11 items-center"
          >
                    <ShimmerText className='  text-6xl' text={"MY CONTRIBUTIONS"} />
                    <ShimmerText className=' text-5xl' text={"THIS YEAR"} />
          </motion.div>
      {/* Contribution Graph */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 w-full max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        <h1 className=' text-2xl text-cyan-300 mb-4'>
          {year} {isLoading && <span className="text-sm font-light text-cyan-300/50 ml-2 animate-pulse">(Syncing Real GitHub Data...)</span>}
        </h1>
        <ContributionGraph
          className="w-full text-2xl"
          data={dataToDisplay}
          showLegend={showLegend}
          showTooltips={showTooltips}
          year={year}
        />
      </motion.div>
    </div>
  )
}

export default Contributions
