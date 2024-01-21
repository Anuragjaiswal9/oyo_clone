

const Header2 = () => {
    const List = [
        {
            name :'Banglore'
        },
        {
            name :'Kolkata'
        },
        {
            name :'Mumbai'
        },
        {
            name :'Delhi'
        },
        {
            name :'Hyderabad'
        },
    ];
  return (
    <div>

        <div className='flex px-20 py-3 bg-customgray font-normal opacity-70 h-9 justify-between items-center'>
            {
                List.map((e)=>{
                    return(
                        <span key = {e.name}>{e.name}</span>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Header2
