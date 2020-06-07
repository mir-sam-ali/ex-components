import React from 'react';
import PropTypes from 'prop-types';
import './Calender.css';
import { Container, Col, Row, Table } from 'react-bootstrap';

const Calendar = (props) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let currentDate = new Date();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let firstDay = new Date(year, month).getDay();
  let monthName = months[month];

  let cells = [];
  let currDay = 1;
  let foundWeekDay = false;

  for (let i = 0; i < 5; i++) {
    let rowEl = [];

    for (let j = 0; j < 7; j++) {
      if (!foundWeekDay) {
        if (j === firstDay && currDay <= monthDays[month]) {
          foundWeekDay = true;
        }
      } else {
        currDay++;
        if (currDay > monthDays[month]) {
          foundWeekDay = false;
        }
      }
      let eventCell = null;
      if (foundWeekDay) {
        for (let k = 0; k < props.events.length; k++) {
          if (props.events[k].date === currDay) {
            eventCell = (
              <div
                style={{
                  height: '100%',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <img
                  style={{ height: '100%' }}
                  className="d-block w-100"
                  src={props.events[k].image}
                  alt="event"
                />
                <span
                  className="date-calendar"
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0.3rem',
                  }}
                >
                  {currDay}
                </span>
              </div>
            );
            break;
          }
        }
      }
      let cellClassName = 'cell-calendar';
      if (i === 0) {
        cellClassName += ' top-row';
      } else if (i === 4) {
        cellClassName += ' bottom-row';
      }

      rowEl.push(
        <td key={`td${i}${j}`} style={{ padding: '0' }}>
          <div className={cellClassName}>
            {/* <div className="border-div-calendar">
              <img
                style={{ height: "100%" }}
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1499578124509-1611b77778c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80"
                alt="First slide"
              />
            </div> */}
            {!foundWeekDay ? (
              <div className="border-div-calendar-no-hover">
                <div className="not-present-month"></div>
              </div>
            ) : (
              <div className="border-div-calendar">
                {eventCell ? (
                  eventCell
                ) : (
                  <div className="no-event-cell">
                    <span
                      className="date-calendar"
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0.3rem',
                      }}
                    >
                      {currDay}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </td>
      );
    }

    let oneRow = <tr key={`td${i}`}>{rowEl}</tr>;
    cells.push(oneRow);
  }

  return (
    <div className="calendar-container">
      <p className="heading-calendar">Calendar Activities</p>
      <p className="month-name-calendar">
        {monthName.toUpperCase() + ' ' + year}
      </p>
      <section>
        <div className="wrapper">
          {/* <h3>JUNE 2020</h3> */}

          <div className="table-calendar">
            <Table borderless>
              <thead>
                <tr style={{ color: ' #A19F9D' }}>
                  <th className="th-calendar">Sunday</th>
                  <th className="th-calendar">Monday</th>
                  <th className="th-calendar">Tuesday</th>
                  <th className="th-calendar">Wednesday</th>
                  <th className="th-calendar">Thursday</th>
                  <th className="th-calendar">Friday</th>
                  <th className="th-calendar">Saturday</th>
                </tr>
              </thead>

              <tbody
                style={{
                  border: '3px solid #8F7FC6',
                }}
              >
                {cells}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

// Calendar.propTypes = {
//   name: PropTypes.string,
// };
export default Calendar;

//make hover effect on image divs
