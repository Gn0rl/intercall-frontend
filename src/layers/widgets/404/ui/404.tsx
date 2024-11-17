import Image from "next/image";
import Link from "next/link";
import styles from './404.module.scss';

const ImageURL = "/image/file.svg";

export function Error404() {
    return (
    <main className={styles.container}>
        <div className={styles.content}>
            <Image width={256} height={256} src={ImageURL} alt="" />
            <h1 className={styles.title}>404</h1>
            <p>Уупс ты кажеться зашёл не туда, <Link href="/">путь на главную</Link></p>
        </div>
    </main>
    )
}