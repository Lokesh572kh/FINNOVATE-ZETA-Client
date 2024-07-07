import { Link } from 'react-router-dom'

function Entry() {
  return (
    <div className="flex justify-center items-center h-screen font-poppins">
      <div className="w-auto md:w-4/5 bg-white rounded-lg border border-border p-4 sm:p-4 h-3/5 justify-center">
        <div className="flex gap-2">
        </div>
        <div className="text-black text-center mb-4 h-1/6 flex items-center justify-center w-auto">
          <h2 className="text-2xl font-bold">Choose Your Role</h2>
        </div>
        <div className="flex flex-col items-center p-6 h-4/5">
            <div className="w-1/3 mx-12 p-3 h-3/5">
              <Link
                to = "/Children_Module_1"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Children
              </Link>
            </div>
            <div className="w-1/3 mx-12 p-3 h-3/5">
              <Link
                to = "/Teenager_Learn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Teenager
              </Link>
            </div>
            <div className="w-1/3 mx-12 p-3 h-3/5">
              <Link
                to = "/Women_Learn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Women
              </Link>
            </div>
            <div className="w-1/3 mx-12 p-3 h-3/5">
              <Link
                to = "/Men_Learn"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center h-full flex items-center justify-center w-full"
              >
                Men
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Entry