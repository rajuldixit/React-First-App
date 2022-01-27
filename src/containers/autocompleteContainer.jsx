import { saveUsers } from "../state/users-store/actions";
import dataService from "../services/data-service";
import AutoComplete from "../components/autocomplete/autocompleteComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function AutocompleteContainer(props) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userState.users);
  useEffect(() => {
    const fetchData = async () => {
      const data = await dataService();
      dispatch(saveUsers(data));
    };
    if (userData && userData.length === 0) {
      fetchData();
    }
  });

  return (
    <>
      {userData ? (
        <AutoComplete usersData={userData} />
      ) : (
        <div>Users not found</div>
      )}
    </>
  );
}

export default AutocompleteContainer;
