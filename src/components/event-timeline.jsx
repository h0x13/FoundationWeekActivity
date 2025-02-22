import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsTimeline = () => {
  const events = [
    {
      date: "17 February 2025",
      activities: [
        { time: "7:45 AM", event: "Traditional Flag-raising ceremony" },
        { time: "9:00 AM", event: "Motorcade (employees & student organizations)" },
        { time: "10:00 AM", event: "Thanksgiving mass" },
        { time: "11:00 AM", event: "Opening program" },
        { time: "8:00 AM to 12:00 NN", event: "Blood donation drive (saving lives activity)" },
        { time: "11:00 AM", event: "Opening of the Medical & dental fair" },
        { time: "2:00 PM", event: "Opening & ribbon cutting of the tabo ha evsu & students organizations booth fair" },
        { time: "3:00 PM", event: "Webinar on shaping the future: driving educational excellence through smart innovation" },
        { time: "6:00 PM", event: "Recognition ceremonies for board top notchers" }
      ]
    },
    {
      date: "18 February 2025",
      activities: [
        { time: "8:30 AM", event: "Opening & ribbon cutting of heritage" },
        { time: "9:30 AM", event: "Student's exhibit of creative works / projects & skills contest", location: "Inner Court" },
        { time: "10:00 AM", event: "Memorandum of agreement signing with international and local partners", location: "Graduate School Function Hall" },
        { time: "2:00 PM", event: "Harampang meeting with the president. Teaching Personnel", location: "Miguel Romualdez Memorial Auditorium" },
        { time: "2:00 PM", event: "Secondary Laboratory School (SLS) Day", location: "Evsu Inner Court" }
      ]
    },
    {
      date: "19 February 2025",
      activities: [
        { time: "9:00 AM", event: "Kanyaw", location: "Inner Court" },
        { time: "9:00 AM", event: "Harampang meeting with the president. Non-teaching personnel", location: "Miguel Romualdez Memorial Auditorium" },
        { time: "3:00 PM", event: "Fellowship", location: "Miguel Romualdez Memorial Auditorium" },
        { time: "", event: "6th Cinesulat - The industrial wheel's film & literary festival 2025" }
      ]
    },
    {
      date: "20-21 February 2025",
      activities: [
        { time: "8:00 AM - 7:00 PM", event: "Organizations day", location: "Open Field" }
      ]
    },
    {
      date: "20 February 2025",
      activities: [
        { time: "9:30 AM", event: "Harampang meeting with the president. Campus Student Leaders", location: "Miguel Romualdez Memorial Auditorium" },
        { time: "10:00 AM", event: "Basketball exhibition game", location: "Inner Court" },
        { time: "3:00 PM", event: "Parangal", location: "People Center" }
      ]
    },
    {
      date: "21 February 2025",
      activities: [
        { time: "9:00 AM", event: "Smart university project blessing and ribbon cutting ceremonies" },
        { time: "6:00 PM", event: "Mojofly concert for a cause", location: "Miguel Romualdez Memorial Auditorium" },
        { time: "6:00 PM", event: "Students' night", location: "Open Field" },
        { time: "8:00 AM to 5:00 PM", event: "Graduate student's day", location: "Graduate School Function Hall" }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-1xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-10 mt-8 text-slate-300">EVSU Foundation Week Events Schedule</h1>
      <div className="relative">
        {events.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-12 relative">
            <div className="absolute left-2 sm:left-4 md:left-8 top-0 w-1 h-full bg-gray-400" />

            <div className="flex items-center mb-6 relative">
              <div className="absolute left-2 sm:left-4 md:left-8 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/4" />
              <div className="ml-8 sm:ml-12 md:ml-16 flex items-center align-top">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-slate-300 mr-2" />
                <h2 className="text-sm sm:text-base md:text-xl font-semibold text-slate-300">{day.date}</h2>
              </div>
            </div>

            <div className="space-y-6">
              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} className="relative ml-8 sm:ml-12 md:ml-16">
                  {/* Activity dot */}
                  <div className="absolute -left-6 sm:-left-8 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/4 mt-2" />

                  <div className="bg-white p-2 sm:p-4 rounded-md sm:rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col space-y-2">
                      {activity.time && (
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-3 md:w-4 h-3 md:h-4 mr-1 md:mr-2" />
                          <span className="text-xs md:text-sm font-medium">{activity.time}</span>
                        </div>
                      )}
                      <div className="text-gray-800 text-xs md:text-base">{activity.event}</div>
                      {activity.location && (
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-2 md:w-2 h-3 md:h-4 mr-1 md:mr-2" />
                          <span className="text-xs md:text-sm">{activity.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTimeline;
