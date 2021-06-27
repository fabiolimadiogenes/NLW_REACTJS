import { ReactNode } from 'react';
import cx from 'classnames'

import './styles.scss';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode
    isAnswered?: boolean
    isHishlighted?: boolean
}

export function Question({
    content, 
    author,
    isAnswered = false,
    isHishlighted = false,
    children,
}: QuestionProps){
    return(
        <div 
        className={cx(
            'question',
            {answered: isAnswered},
            {highlighted: isHishlighted && !isAnswered },
        )}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                    <div>
                        {children}
                    </div>
                </div>
            </footer>
        </div>
    )
}