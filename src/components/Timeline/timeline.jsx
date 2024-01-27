import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 4px;
  }
  scrollbar-width: thin;
  scrollbar-color: black transparent;
`;

const TimelineWrapper = styled.div`
  position: relative;
  margin: 80px 0;
  height: 2px;
  width: 200%;
  background-color: #ddd;
  white-space: nowrap;
`;

const EventMarker = styled.div`
  position: absolute;
  height: 8px;
  width: 25px;
  border-radius: 30px;
  background-color: #00D54B;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ date }) => date};
`;

const EventDay = styled.div`
  position: absolute;
  top: -65px;
  left: ${({ date }) => date};
  color: #00D54B;
  font-size: 11px;
  padding: 5px 15px;
  border: 2px solid #00D54B;
  border-radius: 40px;
  background-color: #86EFAC33;
  transform: translateX(-30%);
`;

const EventTime = styled.div`
  position: absolute;
  font-size: 20px;
  top: -33px;
  left: ${({ date }) => date};
  white-space: nowrap;
  color: #FFF;
  transform: translateX(-30%);
`;

const EventActivity = styled.div`
  position: absolute;
  bottom: -30px;
  left: ${({ date }) => date};
  white-space: nowrap;
  color: #86EFAC;
  transform: translateX(-30%);
`;

const Event = ({ date, day, time, activity }) => (
  <>
    <EventMarker date={date} />
    <EventTime date={date}>{time}</EventTime>
    <EventDay date={date}>{day}</EventDay>
    <EventActivity date={date}>{activity}</EventActivity>
  </>
);

const Timeline = ({ events }) => (
  <TimelineContainer>
    <TimelineWrapper>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </TimelineWrapper>
  </TimelineContainer>
);

export default Timeline;
