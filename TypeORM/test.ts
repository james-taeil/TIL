import { getRepository } from 'typeorm';

const user = await getRepository(User)
	.createQueryBuilder("user")
	.where("user.id = :id", {id : 1}
	.getOne();

  