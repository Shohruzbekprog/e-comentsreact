/* eslint-disable react/prop-types */

export default function Maxfiy({title, setTitle, price, setPrice, handleid}) {


  return (
    <div>
          <form action="" onSubmit={handleid}>
      <label htmlFor="">Title</label>
      <br />
      <input type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="">Price</label>
      <br />
      <input type="text" name="" id="" value={price}  onChange={(e) => setPrice(e.target.value)}/>
      <br />
      <button>Add</button>
    </form>
    </div>
  )
}
