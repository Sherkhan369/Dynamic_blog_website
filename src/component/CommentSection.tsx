
import React, {useState} from "react";

import { Card, CardContent } from "./ui/card";
import { Input } from "../component/ui/input";
import { Button } from "./ui/button";


interface Comment {
    id: string;
    authore: string;
    text: string;

}

interface CommentSectionProps {
 postId: string;
};


export default function CommentSecetion({}:CommentSectionProps) {
    const [comment, setComment] = useState<Comment[]>([]);
    const [newComment, setNewComment] =useState(``);
    const [authoreName, setAuthoreName] =useState(``);
    const [editingCommentId, setEditingCommentId] =useState<string | null> (null);

    const handleAddComment = ()=> {
        if (newComment.trim() && authoreName.trim()) {
        const newCommentObj : Comment = {
            id: new Date().toISOString(),
            authore: authoreName,
            text: newComment,
        };
        setComment([...comment, newCommentObj]);
        setNewComment("");
        setAuthoreName("");

            
        }
    };
    const handleEditComment = (commentID: string) => {
        const commentToEdit = comment.find((comment) => comment.id === commentID);
        if (commentToEdit) {
            setNewComment(commentToEdit.text);
            setAuthoreName(commentToEdit.authore);
            setEditingCommentId(commentID)
        }
    };

    const handleSaveEditComment = ()=>{
        if(newComment.trim() && authoreName.trim() && editingCommentId){
            const updatedComment = comment.map((comment) =>
            comment.id === editingCommentId ?
            {...comment, text: newComment, authore: authoreName}: comment
        );
        setComment(updatedComment);
        setNewComment("");
        setAuthoreName("");
        setEditingCommentId(null);
        }
    };

    return(
        <div className=" mt-8">
            <h2 className="text-2xl font-semibold">Comments</h2>
            <div className="mt-4 space-y-4">
                { 
                comment.length > 0 ?(
                        comment.map((comment) =>{
                            <Card key={comment.id}>
                                <CardContent className="p-4">
                                    <div className="font-semibold">{comment.authore}</div>
                                    <p>{comment.text}</p>
                                    <Button onClick={()=> handleEditComment(comment.id)}
                                     className="mt-2 text-blue-500">
                                        Edit

                                    </Button>
                                </CardContent>
                                </Card>
                        })
                    ) :
                        (
                            <p className="text-slate-400">No comment Yet</p>
                    )
                };
            </div>
                
            <div className="mt-6">
                <Input 
                type = "text"
                value = {authoreName}
                onChange ={(e) => setAuthoreName(e.target.value)}
                placeholder="Your name"
                className="w-full mb-2"/>

               <Input 
                type = "text"
                value = {newComment}
                onChange ={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="w-full mb-2"/>

                <Button 
                onClick={editingCommentId ? handleSaveEditComment : handleAddComment}
                className="mt-4">
                    {editingCommentId ? 'Save' : 'Submit'}
                </Button>
            </div>
        </div>
            
    );
}

