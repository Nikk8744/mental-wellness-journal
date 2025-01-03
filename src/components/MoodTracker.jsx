// import React from 'react'
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
} from "@mui/icons-material"; // Using Material UI icons for mood options
import { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 

const allMoodOptions = [
  {
    name: "Very Happy", 
    icon: <SentimentVerySatisfied fontSize="large" color="success"/>, 
    value: 1
  },
  {
    name: "Happy ", 
    icon: <SentimentSatisfiedAlt fontSize="large" color="primary"/>, 
    value: 2
  },
  {
    name: "Neutral", 
    icon: <SentimentSatisfied fontSize="large" color="secondary"/>, 
    value: 3
  },
  {
    name: "Sad", 
    icon: <SentimentDissatisfied fontSize="large" color="warning"/>, 
    value: 4
  },
  {
    name: "Very Sad", 
    icon: <SentimentVeryDissatisfied fontSize="large" color="error"/>, 
    value: 5
  },
]

const MoodTracker = () => {


  const [selectedMood, setSelectedMood] = useState(null)
  const [moodData, setMoodData] = useState([])

  const handleMood = (mood) => {
      setSelectedMood(mood)
      // console.log(mood)

      const newMoodEntry = {
        id: Date.now(),
        mood,
        date: new Date().toDateString(), // idhar i can write toISOString() also
      }
      const updatedMood = [...moodData, newMoodEntry ]
      setMoodData(updatedMood)
      localStorage.setItem("moodEntries", JSON.stringify(updatedMood)) 
  }

  useEffect(() => {
    const prevMoodEntries = JSON.parse(localStorage.getItem("moodEntries")) || []
    // console.log("The prev entries are",prevMoodEntries)
    setMoodData(prevMoodEntries);
  }, [])  
  // console.log(moodData)

  // ye mood count krne ke liye banaya hai so that uss hisab se chart mai dikhe
  const moodCounts = {};
  moodData.forEach((entry) => {
    // Initialize mood count if it doesn't exist
    if (!moodCounts[entry.mood]) {
      moodCounts[entry.mood] = 0;
    }
    // Increment the count for the current mood
    moodCounts[entry.mood]++;
  });

  const chartData = {
    labels: allMoodOptions.map((mood) => mood.name),
    datasets: [
      {
        label: 'Mood',
        data: allMoodOptions.map((mood) => moodCounts[mood.value] || 0),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          "rgb(25, 99, 122)", 
          "rgb(153, 102, 255)",
        ],
        rotation: 200,
      },
    ],
  }


  return (
    //  max-w-xl
    <div className="rounded-2xl mx-auto max-w-screen-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">
        How are you feeling today?.....
      </h2>

      {/* mood selector */}
      <div className="bg-white shadow-md flex justify-between p-5 min-w-full rounded-2xl space-x-4 mb-6">
        {allMoodOptions.map((mood) => (
          <div key={mood.value} 
              className="flex flex-col items-center cursor-pointer hover:scale-105" 
              onClick={() => handleMood(mood.value)}>
            <div className="text-2xl">{mood.icon}</div>
            <div className="text-lg text-gray-600 font-bold">{mood.name}</div>
          </div>
        ))}
      </div>

      {moodData.length > 0 && (
        <div className="bg-white shadow-md  flex flex-col min-w-full rounded-2xl items-center p-6">
          <div className="text-3xl p-6">Mood Chart</div>
          {/* <PieChart data={chartData}/> */}
          <div className="w-96 h-96">
            <Pie data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
