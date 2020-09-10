import { firebase } from "../firebase/firebase";

const peopleFetchDataSucces = (people) => ({
  type: "PEOPLE_FETCH_DATA_SUCCES",
  people,
});

const startPeopleReciving = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref("peopleList")
      .once("value")
      .then((data) => {
        const people = data.val();
        dispatch(peopleFetchDataSucces(people));
      });
  };
};

export default startPeopleReciving;
