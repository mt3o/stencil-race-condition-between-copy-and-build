
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-ntciy01o41',
  shadow: true,
})
export class Cntciy01o41 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  