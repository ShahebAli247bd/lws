 
const Modal = ({ formData, handleInputChange, handleSubmit, closeModal }) => {
    
      
    
    return (
        <div className="inset-0 z-50 flex items-center justify-center bg-opacity-50 rounded  drop-shadow-md">
            <div clasName="w-11/12 p-6 text-gray-600 rounded bg-gradient-to-r from-gray-700 to-gray-800 md:w-1/3">
                <h2 className="mb-4 text-xl font-bold text-gray-100">
                    
                     Registration Form
                </h2>
                <form onSubmit={handleSubmit} className="text-gray-600">
                    <div className="mb-4">
                        <label className="block text-gray-100">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">
                            Highest Education
                        </label>
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">
                            Course Type (Live/Comprehensive)
                        </label>
                        <input
                            type="text"
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">
                            Course Fee (Live Plan 500/- || Comprehensive Plan
                            1000/- )
                        </label>
                        <input
                            type="text"
                            name="courseFee"
                            value={formData.courseFee}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-100">
                            Transaction Number (Bkash/Nagad = 01725 874 211)
                        </label>
                        <input
                            type="text"
                            name="transactionNumber"
                            value={formData.transactionNumber}
                            onChange={handleInputChange}
                            required
                            className="w-1/2 p-2 mr-2 border border-gray-300 rounded"
                        />

                        <input
                            type="text"
                            name="couponCode"
                            value={formData.couponCode}
                            onChange={handleInputChange}
                            required
                            placeholder="Coupon Code"
                            className="items-end w-1/3 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="px-6 py-2 text-white bg-red-600 rounded-full"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
