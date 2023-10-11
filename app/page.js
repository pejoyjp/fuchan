import Image from 'next/image'

export default function Home() {
  return (
   
   <div className='flex justify-center items-center flex-col w-full bg-[#f4f4f4] '>
    <div className='w-full flex justify-between items-center h-[80px] bg-white mb-[20px]'>
      <Image src={'/home.png'} height={50} width={80} alt='home'/>
      <p className='text-lg'>
        问题详情
      </p>
      <Image src={'/menu.png'} height={50} width={120} alt='home'/>
    </div>

    <p className=' text-sm text-neutral-600'>
      19:06
    </p>
    <div className='w-11/12 bg-[#eae9fd] rounded-md p-5 text-neutral-600 mt-5'>
      <div className='flex gap-2 mb-5 mr-5'>
        <Image src={'/discuss.png'} height={30} width={30} alt='home'/>
        <p className='text-xl text-black'>
          第一次提问
        </p>
      </div>
      <p>
      您好，医生。我不是来咨询病情的，我想和您咨询一下产科的医学史。

        我的一个朋友有两个言论： 
      </p>
      <p>
      言论1：古代婴儿死亡率高是因为古代生活条件恶劣，食物不足，产妇身体素质极差，今天婴儿死亡率低是因为经济发达，食物充足，生活环境改善，而不是医学的原因，今天的产科技术本质上和2000年前没有区别，面对难产和羊水栓塞现代医学一样无能为力
      </p>
        
      <p>
      言论2：不管是古代婴儿死亡率高还是现代婴儿死亡率低都和医学没什么关系，主要是和平的环境和经济发展
      </p>
      <p>
      您可以就这个他的言论发表一些评论吗？谢谢。
      </p>

         
    </div>


    <div className='w-11/12 bg-[#eae9fd] rounded-md p-5 text-neutral-600 mt-5 h-[180px]'>
      <div className='flex gap-2 mb-5 mr-5'>
        <p className='text-xl text-black'>
            患者信息
        </p>
      </div>
    </div>


    <div className='w-11/12 bg-white rounded-md p-5 text-neutral-600 mt-5'>
      <div className='flex gap-2 mb-5 mr-5 items-center'>
        <Image src={'/doc.png'} height={50} width={50} alt='home'/>
        <p className='text-xl text-black'>
          邵啥的 医生
        </p>
      </div>
      <p>
          您好，以上问题并不属于医疗问题。但我可以简单的说一下我的理解。2000年前的产科肯定比不上今天的医疗服务。今天的b超,剖腹产,荷尔蒙监测，新生儿抢救这种技术2000年前是肯定不会有的。我们说只要定期产检，难产的情况是可以很有效地被避免。难产在我国的发生概率已经不高了,在某些情况下，我们可以使用催产素，调整胎位，剖腹产对难产进行抢救治疗的

      </p>
      
         
    </div>

    <div className='w-11/12 bg-[#eae9fd] rounded-md p-5 text-neutral-600 mt-5 h-[180px]'>
      <div className='flex gap-2 mb-5 mr-5'>
        <p className='text-xl text-black'>
            为您推荐妇产科-万希润医生
        </p>
      </div>
    </div>


    
   </div>
  )
}
