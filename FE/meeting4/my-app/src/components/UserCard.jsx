function UserCard(props) {
  const { user } = props;
  return (
    <div className="bg-slate-200 my-1 rounded-lg px-4 py-3 drop-shadow-md shadow-slate-500">
      <p className="font-bold text-base">{user.name}</p>
      <p className="font-normal text-sm">{user.email}</p>
      <p className="font-normal text-sm">{user.phone}</p>
      <p className="font-normal text-sm">{user.website}</p>

      <p className="font-normal text-sm">
        {user.address.street} {user.address.suite}, {user.address.city}{" "}
        {user.address.zipcode}
      </p>
      <hr className="border-t-2 border-slate-800 my-2" />
    </div>
  );
}
export default UserCard;
