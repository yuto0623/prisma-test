import { PrismaClient } from "@prisma/client";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function PATCH(
  Request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { completed }: { completed: boolean } = await Request.json();

  //リクエストのidを元にcompletedを反転させる
  const response = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: !completed,
    },
  });
  return Response.json(response);  
}


export async function DELETE(
  Request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  //リクエストのidを元にtodoを削除
  const response = await prisma.todo.delete({
    where: {
      id,
    },
  });
  return Response.json(response);
}