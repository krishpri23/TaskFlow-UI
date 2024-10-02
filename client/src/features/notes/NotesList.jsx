import { useSelector } from "react-redux";
import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetNotesQuery(null, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;
  if (isLoading) content = <p>Loading...</p>;
  if (isError) {
    content = <p> {error?.data?.message} </p>;
  }

  console.log("NOTES INSIDE NOTESLIST", notes);

  if (isSuccess) {
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <table>
        <thead>
          <tr>
            <th> username </th>
            <th>created</th>
            <th>updated</th>
            <th> title</th>
            <th>owner</th>
          </tr>
        </thead>

        <tbody>{tableContent}</tbody>
      </table>
    );
  }

  return content;
};

export default NotesList;
