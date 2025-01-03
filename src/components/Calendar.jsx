import { Badge, List, ListItem, ListItemText, Divider } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { isSameDay } from "date-fns";
import { useEffect, useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { PickersDay } from "@mui/x-date-pickers";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 1,
    bottom: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Calendar = () => {
  const [entries, setEntries] = useState([]);
  const [moods, setMoods] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    const storedMoods = JSON.parse(localStorage.getItem("moodEntries")) || [];
    setEntries(storedEntries);
    setMoods(storedMoods);
  }, []);

  const hasData = (date) => {
    const hasEntry = entries.some((entry) => isSameDay(new Date(entry.date), date));
    const hasMood = moods.some((mood) => isSameDay(new Date(mood.date), date));
    return hasEntry || hasMood;
  };

  const filteredEntries = entries.filter((entry) => isSameDay(new Date(entry.date), selectedDate));
  const filteredMoods = moods.filter((mood) => isSameDay(new Date(mood.date), selectedDate));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col lg:flex-row p-4 bg-[#85A947] rounded shadow-md space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Calendar Section */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-center">Your Calendar</h2>
          <DateCalendar
            date={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate);
            }}
            renderDay={(day, _value, DayComponentProps) => {
              const dayHasData = hasData(day);
              return (
                <StyledBadge key={day.toString()} color="success" variant="dot" invisible={!dayHasData} overlap="circular">
                  <PickersDay
                    {...DayComponentProps}
                    disableMargin
                    selected={isSameDay(day, selectedDate)}
                    sx={{
                      backgroundColor: isSameDay(day, selectedDate) ? "blue.500" : "transparent",
                      color: isSameDay(day, selectedDate) ? "white" : "inherit",
                      "&:hover": {
                        backgroundColor: "gray.200",
                      },
                    }}
                  />
                </StyledBadge>
              );
            }}
            className="mb-6"
          />
        </div>

        {/* Journal Entries and Mood Ratings Section */}
        <div className="flex-1 space-y-6">
          {/* Journal Entries */}
          <div>
            <h3 className="text-lg font-medium pt-4">Entries:</h3>
            <List className="max-h-80 overflow-auto">
              {filteredEntries.length > 0 ? (
                filteredEntries.map((entry) => (
                  <div key={entry.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={<span className="font-semibold">• {entry.content}</span>}
                        secondary={
                          <div className="mt-1">
                            {entry.tags.map((tag, index) => (
                              <span key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                                {tag}
                              </span>
                            ))}
                          </div>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </div>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary={<span className="text-[#123524]">No journal entries for this date.</span>} />
                </ListItem>
              )}
            </List>
          </div>

          {/* Mood Entries */}
          <div>
            <h3 className="text-lg font-medium mt-4 mb-2">Mood Rating:</h3>
            <List className="max-h-80 overflow-auto">
              {filteredMoods.length > 0 ? (
                filteredMoods.map((mood) => (
                  <div key={mood.id}>
                    <ListItem>
                      <ListItemText primary={<span className="font-semibold">• Mood Rating: {mood.mood}</span>} />
                    </ListItem>
                    <Divider component="li" />
                  </div>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary={<span className="text-gray-500">No mood ratings for this date.</span>} />
                </ListItem>
              )}
            </List>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Calendar;
