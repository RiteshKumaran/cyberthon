import React from "react";
import styled from "styled-components";

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
  @media (max-width: 770px) {
    width: 400%;
  }
`;

const EventMarker = styled.div`
  position: absolute;
  height: 8px;
  width: 25px;
  border-radius: 30px;
  background-color: #00d54b;
  top: 50%;
  transform: translateY(-50%);
`;

const EventDay = styled.div`
  position: absolute;
  top: -65px;
  color: #00d54b;
  font-size: 11px;
  padding: 5px 15px;
  border: 2px solid #00d54b;
  border-radius: 40px;
  background-color: #86efac33;
  transform: translateX(-30%);
`;

const EventTime = styled.div`
  position: absolute;
  font-size: 20px;
  top: -33px;
  white-space: nowrap;
  color: #fff;
  transform: translateX(-30%);
`;

const EventActivity = styled.div`
  position: absolute;
  bottom: -30px;
  white-space: nowrap;
  color: #86efac;
  transform: translateX(-30%);
`;

const Container = styled.div`
  position: absolute;
  left: ${({ date }) => date};
  @media (max-width: 770px) {
    left: ${({ date }) => `calc(${date} * 1.2)`};
  }
  @media (max-width: 430px) {
    left: ${({ date }) => `calc(${date} * 1.5)`};
  }
`;

const Event = ({ date, day, time, activity }) => (
  <Container date={date}>
    <EventMarker />
    <EventTime>{time}</EventTime>
    <EventDay>{day}</EventDay>
    <EventActivity>{activity}</EventActivity>
  </Container>
);

const Timeline = ({ events }) => (
  <div id="Timeline">
    <h1 className="mt-20 mb-12 md:mt-8 md:mb-6 font-karrera text-primary text-center tracking-widest text-5xl md:text-3xl pb-10 md:py-6">
      TIMELINE
    </h1>
    <TimelineContainer>
      <TimelineWrapper>
        {events.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </TimelineWrapper>
    </TimelineContainer>
  </div>
);

export default Timeline;
