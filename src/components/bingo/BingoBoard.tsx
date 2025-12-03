import Button from '../button/Button';
import BingoCard from './BingoCard';

const array = [
  '하루 30분 산책하기',
  '따뜻한 차 마시며 일기 1장 쓰기',
  '집에서 홈트 20분 하기',
  '소중한 사람 한 명에게 안부 톡 보내기',
  '오늘 좋았던 순간 사진 1장 찍기',
  '유튜브/책으로 새로운 지식 10분 배우기',
  '방 한 구역만 미니 대청소',
  '나만을 위한 저녁 식사 정성껏 차리기',
  '오늘의 나 칭찬 3가지 적기',
];

const BingoBoard = () => {
  return (
    <section className="mt-5 w-full sm:mt-8">
      <div className="mx-2 flex items-center justify-between">
        <p className="text-2xs dark:text-text/60 sm:text-xs">
          현재 <span className="font-semibold">0 BINGO</span>
        </p>
        <Button variant="outline" size="sm">
          빙고 내용 편집
        </Button>
        {/* <div className="flex items-center gap-1 sm:gap-2">
          <Button size="sm">저장하기</Button>
          <Button variant="ghost" size="sm">
            취소
          </Button>
        </div> */}
      </div>

      <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-2">
        {array.map((item, index) => (
          <BingoCard key={index} id={`bingo-card-${index}`} text={item} />
        ))}
      </div>
    </section>
  );
};

export default BingoBoard;
