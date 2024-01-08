import { useEffect, useRef, useState } from "react";
import { meetingRoomList } from "../utils/meetingRoomList";
import ReservationForm from "./ReservationForm";
import { useOutsideClick } from "../utils/useOutsideClick";
const Home = () => {
  const [meetingList, setMeetingList] = useState(
    JSON.parse(localStorage.getItem("meetings_details")) || meetingRoomList
  );
  const [active, setActive] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const ref = useRef(null);
  const currentUser = JSON.parse(localStorage.getItem("current_user_details"));

  useOutsideClick(ref, () => setActive(false));

  console.log("ref", ref);

  const handlerLogout = () => {
    localStorage.removeItem("current_user_details");
    window.location.reload();
  };

  const handleReservation = (id) => {
    setActive(true);

    setSelectedRoom(id);
  };
  console.log("select room", selectedRoom);
  const handleRoomReservation = (
    firstName,
    lastName,
    noOfGuests,
    date,
    time
  ) => {
    setMeetingList(
      meetingList.map((room) =>
        room.id === selectedRoom
          ? {
              ...room,
              firstName,
              lastName,
              date,
              noOfGuests,
              status: "closed",
              time,
            }
          : room
      )
    );
  };
  console.log(meetingList.map((room) => room.id === selectedRoom));
  useEffect(() => {
    localStorage.setItem("meetings_details", JSON.stringify(meetingList));
  }, [meetingList]);

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-between items-center">
        <div className="p-10 text-3xl font-bold text-center">
          Meeting room reservation system
        </div>
        <div>
          <span className="font-thin">
            Welcome <span className="font-bold">{currentUser.name}</span>{" "}
          </span>
          <button
            className=" bg-blue-500 px-5 py-2 m-5 rounded-md text-white"
            onClick={handlerLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <h1 className="text-center p-10 text-2xl font-bold">List of Rooms</h1>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Room ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Room Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Room Status
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Book Seats
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Booked status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {meetingList &&
                    meetingList.map((room) => (
                      <tr key={room.id} className={`border-b `}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {room.id}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {room.meetingRoom}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {room.status}
                        </td>

                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap cursor-pointer">
                          <button
                            onClick={() => handleReservation(room.id)}
                            className="bg-blue-500 px-5 py-2 rounded-md text-white"
                            disabled={
                              room.status === "available" ? false : true
                            }
                          >
                            Book Seat
                          </button>
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {room.date && room.time ? (
                            <b>
                              {room.date} & {room.time}
                            </b>
                          ) : (
                            "Open to booking"
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-gray-50">
          <div
            className="min-w-screen min-h-screen absolute top-[10%] left-[32%]"
            ref={ref}
          >
            <ReservationForm
              setActive={setActive}
              handleRoomReservation={handleRoomReservation}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
