const Footer = () => {
  let date = new Date();
  let getDate = date.getDate();
  let getMonth = date.getMonth();
  let getFullYear = date.getFullYear();
  let getHours = date.getHours();
  let getMinute = date.getMinutes();
  let getsecond = date.getSeconds();
  return (
    <div className="footer">
      <div className="date">Ishay HgevGever</div>
      <div className="date">{`${getDate}/${getMonth}/${getFullYear}`}</div>
      <div className="date">{`${getHours} : ${getMinute} : ${getsecond}`}</div>
    </div>
  );
};
export default Footer;
