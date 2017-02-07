import { MeetingRoomLiveBookingPage } from './app.po';

describe('meeting-room-live-booking App', function() {
  let page: MeetingRoomLiveBookingPage;

  beforeEach(() => {
    page = new MeetingRoomLiveBookingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
