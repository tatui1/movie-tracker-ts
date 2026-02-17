interface LikeDislikeProps {
  reaction: 'like' | 'dislike' | null
  onLike: () => void
  onDislike: () => void
}

export const LikeDislike = ({ reaction, onLike, onDislike }: LikeDislikeProps) => {
  return (
    <div className="like-dislike">
      <button
        onClick={onLike}
        className={reaction === 'like' ? 'active like' : 'like'}> 👍 like</button>
      <button
        onClick={onDislike}
        className={reaction === 'dislike' ? 'active dislike' : 'dislike'}> 👎 dislike</button>
    </div>
  )
}