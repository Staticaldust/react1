import Title from "./Title";
const Book = () => {
  return (
    <div id="book">
      <div>
        <Title />
      </div>
      <img
        src="https://cdn.kobo.com/book-images/9d863d07-4a3f-4ccf-95bb-faf1660d25df/353/569/90/False/harry-potter-and-the-deathly-hallows-4.jpg"
        alt="Harry Potter 7"
        className="img"
      />
      <p>Harry Potter 7</p>
    </div>
  );
};
export default Book;
