import { Comment as PrismaComment, User as PrismaUser } from '@prisma/client'
import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

type PrismaCommentWithAuthor = PrismaComment & {
  author: PrismaUser
}

export class PrismaCommentWithAuthorMapper {
  static toDomain(raw: PrismaCommentWithAuthor): CommentWithAuthor {
    return CommentWithAuthor.create({
      commentId: new UniqueEntityID(raw.id),
      authorId: new UniqueEntityID(raw.authorId),
      content: raw.content,
      author: raw.author.name,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }
}
