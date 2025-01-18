/* Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.*/

import React, { useState } from "react";

export function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);

  return comments.map((comment) => (
    <div className="comment">
      <div className="comment-text" key={comment.id}>{comment.text}</div>
      <button className="comment-btn"
        onClick={() => setComments(comments.filter((c) => c.id !== comment.id))}
      >
        Удалить
      </button>
    </div>
  ));
}

export default CommentsList;
