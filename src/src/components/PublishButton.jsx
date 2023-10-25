const PublishButton = (props) => {
  return (
    <div>
        <button onClick={() => props.onClick()} >
            公開状態: {props.isPublished.toString()}
        </button>
    </div>
  )
}

export default PublishButton
