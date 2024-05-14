import React from 'react'
import '../style/crosswordQuestionField.css'



const CrosswordQuestionField = ({children}) => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div>
      <button className='crosswordQuestionField-button'>
        {children}
      </button>
      {/* <Modal open={isModalOpen} onCancel={handleCancel} style={{textAlign: 'center', fontSize:'large'}}>
        {children}
      </Modal> */}
    </div>
  )
}

export default CrosswordQuestionField
