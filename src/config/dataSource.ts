import { DataSource } from 'typeorm'
import { NeteaseAlbumartistlink } from '../entities/NeteaseAlbumartistlink';
import { NeteaseAlbums } from '../entities/NeteaseAlbums';
import { NeteaseArtists } from '../entities/NeteaseArtists';
import { NeteaseSongartistlink } from '../entities/NeteaseSongartistlink';
import { NeteaseSongs } from '../entities/NeteaseSongs';
import { NeteaseThbsonglink } from '../entities/NeteaseThbsonglink';
import { ThbAlbums } from '../entities/ThbAlbums';
import { ThbSongs } from '../entities/ThbSongs';
import { VNeteaseSongs } from '../entities/VNeteaseSongs';
import { VNeteaseThbsonglink } from '../entities/VNeteaseThbsonglink';
import { VThbSongs } from '../entities/VThbSongs';

const DB_HOST = process.env.DB_HOST || "";
const DB_PORT = Number(process.env.DB_PORT) || 3306;
const DB_USERNAME = process.env.DB_USERNAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_DATABASE = process.env.DB_DATABASE || "";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    timezone: "+08:00",
    synchronize: false,
    logging: false,
    entities: [
        NeteaseAlbumartistlink,
        NeteaseAlbums,
        NeteaseArtists,
        NeteaseSongartistlink,
        NeteaseSongs,
        NeteaseThbsonglink,
        ThbAlbums,
        ThbSongs,
        VNeteaseSongs,
        VNeteaseThbsonglink,
        VThbSongs,
    ],
});