// import { Comment } from 'src/comment/comment.entity';
// import { Post } from 'src/post/post.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dateJoined: string;

  // @OneToMany(() => Post, (post) => post.user)
  // posts: Post[];

  // @OneToMany(() => Comment, (comment) => comment.user)
  // comments: Comment[];
}
